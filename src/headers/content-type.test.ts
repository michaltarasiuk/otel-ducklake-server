import { ContentType } from './content-type.js'
import { describe, expect, test } from 'vitest'

describe('ContentType', () => {
  test('initializes with an empty string', () => {
    const header = new ContentType('')
    expect(header.mediaType).toBeUndefined()
    expect(header.charset).toBeUndefined()
  })

  test('initializes with a string', () => {
    const header = new ContentType('text/plain; charset=utf-8')
    expect(header.mediaType).toBe('text/plain')
    expect(header.charset).toBe('utf-8')
  })

  test('initializes with an object', () => {
    const header = new ContentType({ mediaType: 'text/plain', charset: 'utf-8' })
    expect(header.mediaType).toBe('text/plain')
    expect(header.charset).toBe('utf-8')
  })

  test('initializes with another ContentType', () => {
    const header = new ContentType(new ContentType('text/plain; charset=utf-8'))
    expect(header.mediaType).toBe('text/plain')
    expect(header.charset).toBe('utf-8')
  })

  test('handles whitespace in initial value', () => {
    const header = new ContentType(' text/html ;  charset = iso-8859-1 ')
    expect(header.mediaType).toBe('text/html')
    expect(header.charset).toBe('iso-8859-1')
  })

  test('sets and gets media type', () => {
    const header = new ContentType('text/plain')
    header.mediaType = 'application/json'
    expect(header.mediaType).toBe('application/json')
  })

  test('sets and gets charset', () => {
    const header = new ContentType('text/plain')
    header.charset = 'utf-8'
    expect(header.charset).toBe('utf-8')
  })

  test('sets and gets boundary', () => {
    const header = new ContentType('multipart/form-data')
    header.boundary = 'abc123'
    expect(header.boundary).toBe('abc123')
  })

  test('handles quoted attribute values', () => {
    const header = new ContentType('text/plain; charset="us-ascii"')
    expect(header.charset).toBe('us-ascii')
  })

  test('converts to string correctly', () => {
    const header = new ContentType('text/plain; charset=utf-8')
    expect(header.toString()).toBe('text/plain; charset=utf-8')
  })

  test('converts to an empty string when media type is not set', () => {
    const header = new ContentType()
    header.charset = 'utf-8'
    expect(header.toString()).toBe('')
  })

  test('handles multiple attributes', () => {
    const header = new ContentType('multipart/form-data; boundary="abc123"; charset=utf-8')
    expect(header.mediaType).toBe('multipart/form-data')
    expect(header.boundary).toBe('abc123')
    expect(header.charset).toBe('utf-8')
  })

  test('preserves case for media type', () => {
    const header = new ContentType('Text/HTML')
    expect(header.mediaType).toBe('Text/HTML')
  })

  test('handles attribute values with special characters', () => {
    const header = new ContentType('multipart/form-data; boundary="---=_Part_0_1234567.89"')
    expect(header.boundary).toBe('---=_Part_0_1234567.89')
  })

  test('correctly quotes attribute values in toString()', () => {
    const header = new ContentType('multipart/form-data')
    header.boundary = 'abc 123'
    expect(header.toString()).toBe('multipart/form-data; boundary="abc 123"')
  })

  test('handles empty attribute values', () => {
    const header = new ContentType('text/plain; charset=')
    expect(header.charset).toBe('')
  })

  test('ignores attributes without values', () => {
    const header = new ContentType('text/plain; charset')
    expect(header.charset).toBeUndefined()
  })

  test('preserves order of attributes in toString()', () => {
    const header = new ContentType('multipart/form-data; charset=utf-8; boundary=abc123')
    expect(header.toString()).toBe('multipart/form-data; charset=utf-8; boundary=abc123')
  })
})

describe('ContentType.from', () => {
  test('treats a semicolon after an unquoted backslash as a parameter separator', () => {
    const result = ContentType.from(String.raw`multipart/form-data; note=foo\; boundary=abc`)
    expect(result.boundary).toBe('abc')
  })

  test('accepts a boundary with an unterminated quote', () => {
    const result = ContentType.from('multipart/form-data; boundary="abc')
    expect(result.boundary).toBe('abc')
  })

  test('does not read parameters inside an unterminated quoted value', () => {
    const result = ContentType.from('multipart/form-data; note="value; boundary=abc; charset=utf-8')
    expect(result.boundary).toBeUndefined()
    expect(result.charset).toBeUndefined()
  })

  test('keeps a boundary before an unterminated quoted value', () => {
    const result = ContentType.from('multipart/form-data; boundary=abc; note="value')
    expect(result.boundary).toBe('abc')
  })

  test('preserves quoted boundary whitespace while ignoring surrounding header whitespace', () => {
    expect(ContentType.from('multipart/form-data; boundary=" abc " ').boundary).toBe(' abc ')
    expect(ContentType.from('multipart/form-data; boundary=" abc ').boundary).toBe(' abc')
  })

  test('matches boundary parameter names case-insensitively while preserving the value', () => {
    const result = ContentType.from('Multipart/Form-Data; BOUNDARY="MixedCaseBoundary"')
    expect(result.mediaType).toBe('Multipart/Form-Data')
    expect(result.boundary).toBe('MixedCaseBoundary')
  })

  test('matches charset parameter names case-insensitively while preserving the value', () => {
    const result = ContentType.from('Text/HTML; CharSet="UTF-8"')
    expect(result.mediaType).toBe('Text/HTML')
    expect(result.charset).toBe('UTF-8')
  })

  test('keeps the first boundary when the parameter is repeated', () => {
    const result = ContentType.from('multipart/form-data; boundary=first; boundary=second')
    expect(result.boundary).toBe('first')
  })

  test('keeps the first charset when the parameter is repeated', () => {
    const result = ContentType.from('text/html; charset=utf-8; charset=iso-8859-1')
    expect(result.charset).toBe('utf-8')
  })

  test('recognizes duplicate parameters with different casing', () => {
    const result = ContentType.from(
      'multipart/form-data; BOUNDARY=First; boundary=Second; CharSet=UTF-8; CHARSET=ISO-8859-1',
    )
    expect(result.boundary).toBe('First')
    expect(result.charset).toBe('UTF-8')
  })

  test('keeps empty quoted values when parameters are repeated', () => {
    const result = ContentType.from(
      'multipart/form-data; boundary=""; boundary=second; charset=""; charset=utf-8',
    )
    expect(result.boundary).toBe('')
    expect(result.charset).toBe('')
  })

  test('ignores parameters without values when selecting the first value', () => {
    const result = ContentType.from(
      'multipart/form-data; boundary; boundary=first; boundary; charset; charset=utf-8; charset',
    )
    expect(result.boundary).toBe('first')
    expect(result.charset).toBe('utf-8')
  })

  test('parses a string value', () => {
    const result = ContentType.from('text/html; charset=utf-8')
    expect(result).toBeInstanceOf(ContentType)
    expect(result.mediaType).toBe('text/html')
    expect(result.charset).toBe('utf-8')
  })

  test('accepts init object', () => {
    const result = ContentType.from({ mediaType: 'text/html', charset: 'utf-8' })
    expect(result).toBeInstanceOf(ContentType)
    expect(result.mediaType).toBe('text/html')
    expect(result.charset).toBe('utf-8')
  })
})
