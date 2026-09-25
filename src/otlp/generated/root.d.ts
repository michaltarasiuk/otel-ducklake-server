import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace opentelemetry. */
export namespace opentelemetry {

    /** Namespace proto. */
    namespace proto {

        /** Namespace collector. */
        namespace collector {

            /** Namespace trace. */
            namespace trace {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a TraceService */
                    class TraceService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new TraceService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /** Calls Export. */
                        export: opentelemetry.proto.collector.trace.v1.TraceService.Export;
                    }

                    namespace TraceService {

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.trace.v1.TraceService#export_}.
                         * @param error Error, if any
                         * @param [response] ExportTraceServiceResponse
                         */
                        type ExportCallback = (error: (Error|null), response?: opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse) => void;

                        /** Calls Export. */
                        type Export = {
                          (request: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest, callback: opentelemetry.proto.collector.trace.v1.TraceService.ExportCallback): void;
                          (request: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest): Promise<opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse>;
                          readonly name: "Export";
                          readonly path: "/opentelemetry.proto.collector.trace.v1.TraceService/Export";
                          readonly requestType: "ExportTraceServiceRequest";
                          readonly responseType: "ExportTraceServiceResponse";
                          readonly requestStream: undefined;
                          readonly responseStream: undefined;
                        };
                    }

                    /**
                     * Properties of an ExportTraceServiceRequest.
                     * @deprecated Use opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.$Properties instead.
                     */
                    interface IExportTraceServiceRequest extends opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.$Properties {
                    }

                    /** Represents an ExportTraceServiceRequest. */
                    class ExportTraceServiceRequest {

                        /**
                         * Constructs a new ExportTraceServiceRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportTraceServiceRequest resourceSpans. */
                        resourceSpans: opentelemetry.proto.trace.v1.ResourceSpans.$Properties[];

                        /**
                         * Encodes the specified ExportTraceServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.verify|verify} messages.
                         * @param message ExportTraceServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportTraceServiceRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest & opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.$Shape} ExportTraceServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest & opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.$Shape;

                        /**
                         * Creates an ExportTraceServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportTraceServiceRequest
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;

                        /**
                         * Creates a plain object from an ExportTraceServiceRequest message. Also converts values to other types if specified.
                         * @param message ExportTraceServiceRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportTraceServiceRequest to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportTraceServiceRequest
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportTraceServiceRequest {

                        /** Properties of an ExportTraceServiceRequest. */
                        interface $Properties {

                            /** ExportTraceServiceRequest resourceSpans */
                            resourceSpans?: (opentelemetry.proto.trace.v1.ResourceSpans.$Properties[]|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportTraceServiceRequest. */
                        type $Shape = {
                          resourceSpans?: opentelemetry.proto.trace.v1.ResourceSpans.$Shape[]|null;
                          $unknowns?: Uint8Array[];
                        };
                    }

                    /**
                     * Properties of an ExportTraceServiceResponse.
                     * @deprecated Use opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Properties instead.
                     */
                    interface IExportTraceServiceResponse extends opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Properties {
                    }

                    /** Represents an ExportTraceServiceResponse. */
                    class ExportTraceServiceResponse {

                        /**
                         * Constructs a new ExportTraceServiceResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportTraceServiceResponse partialSuccess. */
                        partialSuccess?: (opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties|null);

                        /**
                         * Encodes the specified ExportTraceServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.verify|verify} messages.
                         * @param message ExportTraceServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportTraceServiceResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse & opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Shape} ExportTraceServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse & opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Shape;

                        /**
                         * Creates an ExportTraceServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportTraceServiceResponse
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;

                        /**
                         * Creates a plain object from an ExportTraceServiceResponse message. Also converts values to other types if specified.
                         * @param message ExportTraceServiceResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportTraceServiceResponse to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportTraceServiceResponse
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportTraceServiceResponse {

                        /** Properties of an ExportTraceServiceResponse. */
                        interface $Properties {

                            /** ExportTraceServiceResponse partialSuccess */
                            partialSuccess?: (opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportTraceServiceResponse. */
                        type $Shape = opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.$Properties;
                    }

                    /**
                     * Properties of an ExportTracePartialSuccess.
                     * @deprecated Use opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties instead.
                     */
                    interface IExportTracePartialSuccess extends opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties {
                    }

                    /** Represents an ExportTracePartialSuccess. */
                    class ExportTracePartialSuccess {

                        /**
                         * Constructs a new ExportTracePartialSuccess.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportTracePartialSuccess rejectedSpans. */
                        rejectedSpans: (number|Long);

                        /** ExportTracePartialSuccess errorMessage. */
                        errorMessage: string;

                        /**
                         * Encodes the specified ExportTracePartialSuccess message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify|verify} messages.
                         * @param message ExportTracePartialSuccess message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportTracePartialSuccess message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess & opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Shape} ExportTracePartialSuccess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess & opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Shape;

                        /**
                         * Creates an ExportTracePartialSuccess message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportTracePartialSuccess
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;

                        /**
                         * Creates a plain object from an ExportTracePartialSuccess message. Also converts values to other types if specified.
                         * @param message ExportTracePartialSuccess
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportTracePartialSuccess to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportTracePartialSuccess
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportTracePartialSuccess {

                        /** Properties of an ExportTracePartialSuccess. */
                        interface $Properties {

                            /** ExportTracePartialSuccess rejectedSpans */
                            rejectedSpans?: (number|Long|null);

                            /** ExportTracePartialSuccess errorMessage */
                            errorMessage?: (string|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportTracePartialSuccess. */
                        type $Shape = opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.$Properties;
                    }
                }
            }

            /** Namespace metrics. */
            namespace metrics {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a MetricsService */
                    class MetricsService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new MetricsService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /** Calls Export. */
                        export: opentelemetry.proto.collector.metrics.v1.MetricsService.Export;
                    }

                    namespace MetricsService {

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.metrics.v1.MetricsService#export_}.
                         * @param error Error, if any
                         * @param [response] ExportMetricsServiceResponse
                         */
                        type ExportCallback = (error: (Error|null), response?: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse) => void;

                        /** Calls Export. */
                        type Export = {
                          (request: opentelemetry.proto.collector.metrics.v1.IExportMetricsServiceRequest, callback: opentelemetry.proto.collector.metrics.v1.MetricsService.ExportCallback): void;
                          (request: opentelemetry.proto.collector.metrics.v1.IExportMetricsServiceRequest): Promise<opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse>;
                          readonly name: "Export";
                          readonly path: "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export";
                          readonly requestType: "ExportMetricsServiceRequest";
                          readonly responseType: "ExportMetricsServiceResponse";
                          readonly requestStream: undefined;
                          readonly responseStream: undefined;
                        };
                    }

                    /**
                     * Properties of an ExportMetricsServiceRequest.
                     * @deprecated Use opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.$Properties instead.
                     */
                    interface IExportMetricsServiceRequest extends opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.$Properties {
                    }

                    /** Represents an ExportMetricsServiceRequest. */
                    class ExportMetricsServiceRequest {

                        /**
                         * Constructs a new ExportMetricsServiceRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportMetricsServiceRequest resourceMetrics. */
                        resourceMetrics: opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties[];

                        /**
                         * Encodes the specified ExportMetricsServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.verify|verify} messages.
                         * @param message ExportMetricsServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportMetricsServiceRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest & opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.$Shape} ExportMetricsServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest & opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.$Shape;

                        /**
                         * Creates an ExportMetricsServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportMetricsServiceRequest
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;

                        /**
                         * Creates a plain object from an ExportMetricsServiceRequest message. Also converts values to other types if specified.
                         * @param message ExportMetricsServiceRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportMetricsServiceRequest to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportMetricsServiceRequest
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportMetricsServiceRequest {

                        /** Properties of an ExportMetricsServiceRequest. */
                        interface $Properties {

                            /** ExportMetricsServiceRequest resourceMetrics */
                            resourceMetrics?: (opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties[]|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportMetricsServiceRequest. */
                        type $Shape = {
                          resourceMetrics?: opentelemetry.proto.metrics.v1.ResourceMetrics.$Shape[]|null;
                          $unknowns?: Uint8Array[];
                        };
                    }

                    /**
                     * Properties of an ExportMetricsServiceResponse.
                     * @deprecated Use opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Properties instead.
                     */
                    interface IExportMetricsServiceResponse extends opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Properties {
                    }

                    /** Represents an ExportMetricsServiceResponse. */
                    class ExportMetricsServiceResponse {

                        /**
                         * Constructs a new ExportMetricsServiceResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportMetricsServiceResponse partialSuccess. */
                        partialSuccess?: (opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties|null);

                        /**
                         * Encodes the specified ExportMetricsServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.verify|verify} messages.
                         * @param message ExportMetricsServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportMetricsServiceResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse & opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Shape} ExportMetricsServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse & opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Shape;

                        /**
                         * Creates an ExportMetricsServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportMetricsServiceResponse
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;

                        /**
                         * Creates a plain object from an ExportMetricsServiceResponse message. Also converts values to other types if specified.
                         * @param message ExportMetricsServiceResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportMetricsServiceResponse to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportMetricsServiceResponse
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportMetricsServiceResponse {

                        /** Properties of an ExportMetricsServiceResponse. */
                        interface $Properties {

                            /** ExportMetricsServiceResponse partialSuccess */
                            partialSuccess?: (opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportMetricsServiceResponse. */
                        type $Shape = opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.$Properties;
                    }

                    /**
                     * Properties of an ExportMetricsPartialSuccess.
                     * @deprecated Use opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties instead.
                     */
                    interface IExportMetricsPartialSuccess extends opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties {
                    }

                    /** Represents an ExportMetricsPartialSuccess. */
                    class ExportMetricsPartialSuccess {

                        /**
                         * Constructs a new ExportMetricsPartialSuccess.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportMetricsPartialSuccess rejectedDataPoints. */
                        rejectedDataPoints: (number|Long);

                        /** ExportMetricsPartialSuccess errorMessage. */
                        errorMessage: string;

                        /**
                         * Encodes the specified ExportMetricsPartialSuccess message. Does not implicitly {@link opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify|verify} messages.
                         * @param message ExportMetricsPartialSuccess message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportMetricsPartialSuccess message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess & opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Shape} ExportMetricsPartialSuccess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess & opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Shape;

                        /**
                         * Creates an ExportMetricsPartialSuccess message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportMetricsPartialSuccess
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;

                        /**
                         * Creates a plain object from an ExportMetricsPartialSuccess message. Also converts values to other types if specified.
                         * @param message ExportMetricsPartialSuccess
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportMetricsPartialSuccess to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportMetricsPartialSuccess
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportMetricsPartialSuccess {

                        /** Properties of an ExportMetricsPartialSuccess. */
                        interface $Properties {

                            /** ExportMetricsPartialSuccess rejectedDataPoints */
                            rejectedDataPoints?: (number|Long|null);

                            /** ExportMetricsPartialSuccess errorMessage */
                            errorMessage?: (string|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportMetricsPartialSuccess. */
                        type $Shape = opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.$Properties;
                    }
                }
            }

            /** Namespace logs. */
            namespace logs {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a LogsService */
                    class LogsService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new LogsService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /** Calls Export. */
                        export: opentelemetry.proto.collector.logs.v1.LogsService.Export;
                    }

                    namespace LogsService {

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.logs.v1.LogsService#export_}.
                         * @param error Error, if any
                         * @param [response] ExportLogsServiceResponse
                         */
                        type ExportCallback = (error: (Error|null), response?: opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse) => void;

                        /** Calls Export. */
                        type Export = {
                          (request: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest, callback: opentelemetry.proto.collector.logs.v1.LogsService.ExportCallback): void;
                          (request: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest): Promise<opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse>;
                          readonly name: "Export";
                          readonly path: "/opentelemetry.proto.collector.logs.v1.LogsService/Export";
                          readonly requestType: "ExportLogsServiceRequest";
                          readonly responseType: "ExportLogsServiceResponse";
                          readonly requestStream: undefined;
                          readonly responseStream: undefined;
                        };
                    }

                    /**
                     * Properties of an ExportLogsServiceRequest.
                     * @deprecated Use opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.$Properties instead.
                     */
                    interface IExportLogsServiceRequest extends opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.$Properties {
                    }

                    /** Represents an ExportLogsServiceRequest. */
                    class ExportLogsServiceRequest {

                        /**
                         * Constructs a new ExportLogsServiceRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportLogsServiceRequest resourceLogs. */
                        resourceLogs: opentelemetry.proto.logs.v1.ResourceLogs.$Properties[];

                        /**
                         * Encodes the specified ExportLogsServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.verify|verify} messages.
                         * @param message ExportLogsServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportLogsServiceRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest & opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.$Shape} ExportLogsServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest & opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.$Shape;

                        /**
                         * Creates an ExportLogsServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportLogsServiceRequest
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;

                        /**
                         * Creates a plain object from an ExportLogsServiceRequest message. Also converts values to other types if specified.
                         * @param message ExportLogsServiceRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportLogsServiceRequest to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportLogsServiceRequest
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportLogsServiceRequest {

                        /** Properties of an ExportLogsServiceRequest. */
                        interface $Properties {

                            /** ExportLogsServiceRequest resourceLogs */
                            resourceLogs?: (opentelemetry.proto.logs.v1.ResourceLogs.$Properties[]|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportLogsServiceRequest. */
                        type $Shape = {
                          resourceLogs?: opentelemetry.proto.logs.v1.ResourceLogs.$Shape[]|null;
                          $unknowns?: Uint8Array[];
                        };
                    }

                    /**
                     * Properties of an ExportLogsServiceResponse.
                     * @deprecated Use opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Properties instead.
                     */
                    interface IExportLogsServiceResponse extends opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Properties {
                    }

                    /** Represents an ExportLogsServiceResponse. */
                    class ExportLogsServiceResponse {

                        /**
                         * Constructs a new ExportLogsServiceResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportLogsServiceResponse partialSuccess. */
                        partialSuccess?: (opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties|null);

                        /**
                         * Encodes the specified ExportLogsServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.verify|verify} messages.
                         * @param message ExportLogsServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportLogsServiceResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse & opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Shape} ExportLogsServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse & opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Shape;

                        /**
                         * Creates an ExportLogsServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportLogsServiceResponse
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;

                        /**
                         * Creates a plain object from an ExportLogsServiceResponse message. Also converts values to other types if specified.
                         * @param message ExportLogsServiceResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportLogsServiceResponse to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportLogsServiceResponse
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportLogsServiceResponse {

                        /** Properties of an ExportLogsServiceResponse. */
                        interface $Properties {

                            /** ExportLogsServiceResponse partialSuccess */
                            partialSuccess?: (opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportLogsServiceResponse. */
                        type $Shape = opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.$Properties;
                    }

                    /**
                     * Properties of an ExportLogsPartialSuccess.
                     * @deprecated Use opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties instead.
                     */
                    interface IExportLogsPartialSuccess extends opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties {
                    }

                    /** Represents an ExportLogsPartialSuccess. */
                    class ExportLogsPartialSuccess {

                        /**
                         * Constructs a new ExportLogsPartialSuccess.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ExportLogsPartialSuccess rejectedLogRecords. */
                        rejectedLogRecords: (number|Long);

                        /** ExportLogsPartialSuccess errorMessage. */
                        errorMessage: string;

                        /**
                         * Encodes the specified ExportLogsPartialSuccess message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify|verify} messages.
                         * @param message ExportLogsPartialSuccess message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportLogsPartialSuccess message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess & opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Shape} ExportLogsPartialSuccess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess & opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Shape;

                        /**
                         * Creates an ExportLogsPartialSuccess message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportLogsPartialSuccess
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;

                        /**
                         * Creates a plain object from an ExportLogsPartialSuccess message. Also converts values to other types if specified.
                         * @param message ExportLogsPartialSuccess
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportLogsPartialSuccess to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ExportLogsPartialSuccess
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ExportLogsPartialSuccess {

                        /** Properties of an ExportLogsPartialSuccess. */
                        interface $Properties {

                            /** ExportLogsPartialSuccess rejectedLogRecords */
                            rejectedLogRecords?: (number|Long|null);

                            /** ExportLogsPartialSuccess errorMessage */
                            errorMessage?: (string|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an ExportLogsPartialSuccess. */
                        type $Shape = opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.$Properties;
                    }
                }
            }
        }

        /** Namespace trace. */
        namespace trace {

            /** Namespace v1. */
            namespace v1 {

                /**
                 * Properties of a TracesData.
                 * @deprecated Use opentelemetry.proto.trace.v1.TracesData.$Properties instead.
                 */
                interface ITracesData extends opentelemetry.proto.trace.v1.TracesData.$Properties {
                }

                /** Represents a TracesData. */
                class TracesData {

                    /**
                     * Constructs a new TracesData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.TracesData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** TracesData resourceSpans. */
                    resourceSpans: opentelemetry.proto.trace.v1.ResourceSpans.$Properties[];

                    /**
                     * Encodes the specified TracesData message. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @param message TracesData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.trace.v1.TracesData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TracesData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.TracesData & opentelemetry.proto.trace.v1.TracesData.$Shape} TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.TracesData & opentelemetry.proto.trace.v1.TracesData.$Shape;

                    /**
                     * Creates a TracesData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TracesData
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Creates a plain object from a TracesData message. Also converts values to other types if specified.
                     * @param message TracesData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.trace.v1.TracesData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TracesData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for TracesData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace TracesData {

                    /** Properties of a TracesData. */
                    interface $Properties {

                        /** TracesData resourceSpans */
                        resourceSpans?: (opentelemetry.proto.trace.v1.ResourceSpans.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a TracesData. */
                    type $Shape = {
                      resourceSpans?: opentelemetry.proto.trace.v1.ResourceSpans.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a ResourceSpans.
                 * @deprecated Use opentelemetry.proto.trace.v1.ResourceSpans.$Properties instead.
                 */
                interface IResourceSpans extends opentelemetry.proto.trace.v1.ResourceSpans.$Properties {
                }

                /** Represents a ResourceSpans. */
                class ResourceSpans {

                    /**
                     * Constructs a new ResourceSpans.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.ResourceSpans.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ResourceSpans resource. */
                    resource?: (opentelemetry.proto.resource.v1.Resource.$Properties|null);

                    /** ResourceSpans scopeSpans. */
                    scopeSpans: opentelemetry.proto.trace.v1.ScopeSpans.$Properties[];

                    /** ResourceSpans schemaUrl. */
                    schemaUrl: string;

                    /**
                     * Encodes the specified ResourceSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @param message ResourceSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.trace.v1.ResourceSpans.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans & opentelemetry.proto.trace.v1.ResourceSpans.$Shape} ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.ResourceSpans & opentelemetry.proto.trace.v1.ResourceSpans.$Shape;

                    /**
                     * Creates a ResourceSpans message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceSpans
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Creates a plain object from a ResourceSpans message. Also converts values to other types if specified.
                     * @param message ResourceSpans
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.trace.v1.ResourceSpans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceSpans to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ResourceSpans
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ResourceSpans {

                    /** Properties of a ResourceSpans. */
                    interface $Properties {

                        /** ResourceSpans resource */
                        resource?: (opentelemetry.proto.resource.v1.Resource.$Properties|null);

                        /** ResourceSpans scopeSpans */
                        scopeSpans?: (opentelemetry.proto.trace.v1.ScopeSpans.$Properties[]|null);

                        /** ResourceSpans schemaUrl */
                        schemaUrl?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ResourceSpans. */
                    type $Shape = {
                      resource?: opentelemetry.proto.resource.v1.Resource.$Shape|null;
                      scopeSpans?: opentelemetry.proto.trace.v1.ScopeSpans.$Shape[]|null;
                      schemaUrl?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a ScopeSpans.
                 * @deprecated Use opentelemetry.proto.trace.v1.ScopeSpans.$Properties instead.
                 */
                interface IScopeSpans extends opentelemetry.proto.trace.v1.ScopeSpans.$Properties {
                }

                /** Represents a ScopeSpans. */
                class ScopeSpans {

                    /**
                     * Constructs a new ScopeSpans.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.ScopeSpans.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ScopeSpans scope. */
                    scope?: (opentelemetry.proto.common.v1.InstrumentationScope.$Properties|null);

                    /** ScopeSpans spans. */
                    spans: opentelemetry.proto.trace.v1.Span.$Properties[];

                    /** ScopeSpans schemaUrl. */
                    schemaUrl: string;

                    /**
                     * Encodes the specified ScopeSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @param message ScopeSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.trace.v1.ScopeSpans.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans & opentelemetry.proto.trace.v1.ScopeSpans.$Shape} ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.ScopeSpans & opentelemetry.proto.trace.v1.ScopeSpans.$Shape;

                    /**
                     * Creates a ScopeSpans message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeSpans
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Creates a plain object from a ScopeSpans message. Also converts values to other types if specified.
                     * @param message ScopeSpans
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.trace.v1.ScopeSpans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeSpans to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ScopeSpans
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ScopeSpans {

                    /** Properties of a ScopeSpans. */
                    interface $Properties {

                        /** ScopeSpans scope */
                        scope?: (opentelemetry.proto.common.v1.InstrumentationScope.$Properties|null);

                        /** ScopeSpans spans */
                        spans?: (opentelemetry.proto.trace.v1.Span.$Properties[]|null);

                        /** ScopeSpans schemaUrl */
                        schemaUrl?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ScopeSpans. */
                    type $Shape = {
                      scope?: opentelemetry.proto.common.v1.InstrumentationScope.$Shape|null;
                      spans?: opentelemetry.proto.trace.v1.Span.$Shape[]|null;
                      schemaUrl?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a Span.
                 * @deprecated Use opentelemetry.proto.trace.v1.Span.$Properties instead.
                 */
                interface ISpan extends opentelemetry.proto.trace.v1.Span.$Properties {
                }

                /** Represents a Span. */
                class Span {

                    /**
                     * Constructs a new Span.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.Span.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Span traceId. */
                    traceId: Uint8Array;

                    /** Span spanId. */
                    spanId: Uint8Array;

                    /** Span traceState. */
                    traceState: string;

                    /** Span parentSpanId. */
                    parentSpanId: Uint8Array;

                    /** Span flags. */
                    flags: number;

                    /** Span name. */
                    name: string;

                    /** Span kind. */
                    kind: opentelemetry.proto.trace.v1.Span.SpanKind;

                    /** Span startTimeUnixNano. */
                    startTimeUnixNano: (number|Long);

                    /** Span endTimeUnixNano. */
                    endTimeUnixNano: (number|Long);

                    /** Span attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** Span droppedAttributesCount. */
                    droppedAttributesCount: number;

                    /** Span events. */
                    events: opentelemetry.proto.trace.v1.Span.Event.$Properties[];

                    /** Span droppedEventsCount. */
                    droppedEventsCount: number;

                    /** Span links. */
                    links: opentelemetry.proto.trace.v1.Span.Link.$Properties[];

                    /** Span droppedLinksCount. */
                    droppedLinksCount: number;

                    /** Span status. */
                    status?: (opentelemetry.proto.trace.v1.Status.$Properties|null);

                    /**
                     * Encodes the specified Span message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @param message Span message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.trace.v1.Span.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Span message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.Span & opentelemetry.proto.trace.v1.Span.$Shape} Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span & opentelemetry.proto.trace.v1.Span.$Shape;

                    /**
                     * Creates a Span message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Span
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Creates a plain object from a Span message. Also converts values to other types if specified.
                     * @param message Span
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.trace.v1.Span, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Span to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Span
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Span {

                    /** Properties of a Span. */
                    interface $Properties {

                        /** Span traceId */
                        traceId?: (Uint8Array|null);

                        /** Span spanId */
                        spanId?: (Uint8Array|null);

                        /** Span traceState */
                        traceState?: (string|null);

                        /** Span parentSpanId */
                        parentSpanId?: (Uint8Array|null);

                        /** Span flags */
                        flags?: (number|null);

                        /** Span name */
                        name?: (string|null);

                        /** Span kind */
                        kind?: (opentelemetry.proto.trace.v1.Span.SpanKind|null);

                        /** Span startTimeUnixNano */
                        startTimeUnixNano?: (number|Long|null);

                        /** Span endTimeUnixNano */
                        endTimeUnixNano?: (number|Long|null);

                        /** Span attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** Span droppedAttributesCount */
                        droppedAttributesCount?: (number|null);

                        /** Span events */
                        events?: (opentelemetry.proto.trace.v1.Span.Event.$Properties[]|null);

                        /** Span droppedEventsCount */
                        droppedEventsCount?: (number|null);

                        /** Span links */
                        links?: (opentelemetry.proto.trace.v1.Span.Link.$Properties[]|null);

                        /** Span droppedLinksCount */
                        droppedLinksCount?: (number|null);

                        /** Span status */
                        status?: (opentelemetry.proto.trace.v1.Status.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Span. */
                    type $Shape = {
                      traceId?: Uint8Array|null;
                      spanId?: Uint8Array|null;
                      traceState?: string|null;
                      parentSpanId?: Uint8Array|null;
                      flags?: number|null;
                      name?: string|null;
                      kind?: opentelemetry.proto.trace.v1.Span.SpanKind|null;
                      startTimeUnixNano?: number|Long|null;
                      endTimeUnixNano?: number|Long|null;
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      droppedAttributesCount?: number|null;
                      events?: opentelemetry.proto.trace.v1.Span.Event.$Shape[]|null;
                      droppedEventsCount?: number|null;
                      links?: opentelemetry.proto.trace.v1.Span.Link.$Shape[]|null;
                      droppedLinksCount?: number|null;
                      status?: opentelemetry.proto.trace.v1.Status.$Shape|null;
                      $unknowns?: Uint8Array[];
                    };

                    /** SpanKind enum. */
                    enum SpanKind {

                        /** SPAN_KIND_UNSPECIFIED value */
                        SPAN_KIND_UNSPECIFIED = 0,

                        /** SPAN_KIND_INTERNAL value */
                        SPAN_KIND_INTERNAL = 1,

                        /** SPAN_KIND_SERVER value */
                        SPAN_KIND_SERVER = 2,

                        /** SPAN_KIND_CLIENT value */
                        SPAN_KIND_CLIENT = 3,

                        /** SPAN_KIND_PRODUCER value */
                        SPAN_KIND_PRODUCER = 4,

                        /** SPAN_KIND_CONSUMER value */
                        SPAN_KIND_CONSUMER = 5
                    }

                    /**
                     * Properties of an Event.
                     * @deprecated Use opentelemetry.proto.trace.v1.Span.Event.$Properties instead.
                     */
                    interface IEvent extends opentelemetry.proto.trace.v1.Span.Event.$Properties {
                    }

                    /** Represents an Event. */
                    class Event {

                        /**
                         * Constructs a new Event.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.trace.v1.Span.Event.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** Event timeUnixNano. */
                        timeUnixNano: (number|Long);

                        /** Event name. */
                        name: string;

                        /** Event attributes. */
                        attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                        /** Event droppedAttributesCount. */
                        droppedAttributesCount: number;

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.trace.v1.Span.Event.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.trace.v1.Span.Event & opentelemetry.proto.trace.v1.Span.Event.$Shape} Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span.Event & opentelemetry.proto.trace.v1.Span.Event.$Shape;

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Event
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @param message Event
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.trace.v1.Span.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Event to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for Event
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace Event {

                        /** Properties of an Event. */
                        interface $Properties {

                            /** Event timeUnixNano */
                            timeUnixNano?: (number|Long|null);

                            /** Event name */
                            name?: (string|null);

                            /** Event attributes */
                            attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                            /** Event droppedAttributesCount */
                            droppedAttributesCount?: (number|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of an Event. */
                        type $Shape = {
                          timeUnixNano?: number|Long|null;
                          name?: string|null;
                          attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                          droppedAttributesCount?: number|null;
                          $unknowns?: Uint8Array[];
                        };
                    }

                    /**
                     * Properties of a Link.
                     * @deprecated Use opentelemetry.proto.trace.v1.Span.Link.$Properties instead.
                     */
                    interface ILink extends opentelemetry.proto.trace.v1.Span.Link.$Properties {
                    }

                    /** Represents a Link. */
                    class Link {

                        /**
                         * Constructs a new Link.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.trace.v1.Span.Link.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** Link traceId. */
                        traceId: Uint8Array;

                        /** Link spanId. */
                        spanId: Uint8Array;

                        /** Link traceState. */
                        traceState: string;

                        /** Link attributes. */
                        attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                        /** Link droppedAttributesCount. */
                        droppedAttributesCount: number;

                        /** Link flags. */
                        flags: number;

                        /**
                         * Encodes the specified Link message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @param message Link message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.trace.v1.Span.Link.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Link message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.trace.v1.Span.Link & opentelemetry.proto.trace.v1.Span.Link.$Shape} Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span.Link & opentelemetry.proto.trace.v1.Span.Link.$Shape;

                        /**
                         * Creates a Link message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Link
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Creates a plain object from a Link message. Also converts values to other types if specified.
                         * @param message Link
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.trace.v1.Span.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Link to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for Link
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace Link {

                        /** Properties of a Link. */
                        interface $Properties {

                            /** Link traceId */
                            traceId?: (Uint8Array|null);

                            /** Link spanId */
                            spanId?: (Uint8Array|null);

                            /** Link traceState */
                            traceState?: (string|null);

                            /** Link attributes */
                            attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                            /** Link droppedAttributesCount */
                            droppedAttributesCount?: (number|null);

                            /** Link flags */
                            flags?: (number|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of a Link. */
                        type $Shape = {
                          traceId?: Uint8Array|null;
                          spanId?: Uint8Array|null;
                          traceState?: string|null;
                          attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                          droppedAttributesCount?: number|null;
                          flags?: number|null;
                          $unknowns?: Uint8Array[];
                        };
                    }
                }

                /**
                 * Properties of a Status.
                 * @deprecated Use opentelemetry.proto.trace.v1.Status.$Properties instead.
                 */
                interface IStatus extends opentelemetry.proto.trace.v1.Status.$Properties {
                }

                /** Represents a Status. */
                class Status {

                    /**
                     * Constructs a new Status.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.Status.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Status message. */
                    message: string;

                    /** Status code. */
                    code: opentelemetry.proto.trace.v1.Status.StatusCode;

                    /**
                     * Encodes the specified Status message. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @param message Status message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.trace.v1.Status.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Status message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.Status & opentelemetry.proto.trace.v1.Status.$Shape} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Status & opentelemetry.proto.trace.v1.Status.$Shape;

                    /**
                     * Creates a Status message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Status
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Creates a plain object from a Status message. Also converts values to other types if specified.
                     * @param message Status
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.trace.v1.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Status to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Status
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Status {

                    /** Properties of a Status. */
                    interface $Properties {

                        /** Status message */
                        message?: (string|null);

                        /** Status code */
                        code?: (opentelemetry.proto.trace.v1.Status.StatusCode|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Status. */
                    type $Shape = opentelemetry.proto.trace.v1.Status.$Properties;

                    /** StatusCode enum. */
                    enum StatusCode {

                        /** STATUS_CODE_UNSET value */
                        STATUS_CODE_UNSET = 0,

                        /** STATUS_CODE_OK value */
                        STATUS_CODE_OK = 1,

                        /** STATUS_CODE_ERROR value */
                        STATUS_CODE_ERROR = 2
                    }
                }

                /** SpanFlags enum. */
                enum SpanFlags {

                    /** SPAN_FLAGS_DO_NOT_USE value */
                    SPAN_FLAGS_DO_NOT_USE = 0,

                    /** SPAN_FLAGS_TRACE_FLAGS_MASK value */
                    SPAN_FLAGS_TRACE_FLAGS_MASK = 255,

                    /** SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK value */
                    SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK = 256,

                    /** SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK value */
                    SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK = 512
                }
            }
        }

        /** Namespace common. */
        namespace common {

            /** Namespace v1. */
            namespace v1 {

                /**
                 * Properties of an AnyValue.
                 * @deprecated Use opentelemetry.proto.common.v1.AnyValue.$Properties instead.
                 */
                interface IAnyValue extends opentelemetry.proto.common.v1.AnyValue.$Properties {
                }

                /** Represents an AnyValue. */
                class AnyValue {

                    /**
                     * Constructs a new AnyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.AnyValue.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** AnyValue stringValue. */
                    stringValue?: (string|null);

                    /** AnyValue boolValue. */
                    boolValue?: (boolean|null);

                    /** AnyValue intValue. */
                    intValue?: (number|Long|null);

                    /** AnyValue doubleValue. */
                    doubleValue?: (number|null);

                    /** AnyValue arrayValue. */
                    arrayValue?: (opentelemetry.proto.common.v1.ArrayValue.$Properties|null);

                    /** AnyValue kvlistValue. */
                    kvlistValue?: (opentelemetry.proto.common.v1.KeyValueList.$Properties|null);

                    /** AnyValue bytesValue. */
                    bytesValue?: (Uint8Array|null);

                    /** AnyValue stringValueStrindex. */
                    stringValueStrindex?: (number|null);

                    /** AnyValue value. */
                    value?: ("stringValue"|"boolValue"|"intValue"|"doubleValue"|"arrayValue"|"kvlistValue"|"bytesValue"|"stringValueStrindex");

                    /**
                     * Encodes the specified AnyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @param message AnyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.common.v1.AnyValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.AnyValue & opentelemetry.proto.common.v1.AnyValue.$Shape} AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.AnyValue & opentelemetry.proto.common.v1.AnyValue.$Shape;

                    /**
                     * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnyValue
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
                     * @param message AnyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.common.v1.AnyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnyValue to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for AnyValue
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace AnyValue {

                    /** Properties of an AnyValue. */
                    interface $Properties {

                        /** AnyValue stringValue */
                        stringValue?: (string|null);

                        /** AnyValue boolValue */
                        boolValue?: (boolean|null);

                        /** AnyValue intValue */
                        intValue?: (number|Long|null);

                        /** AnyValue doubleValue */
                        doubleValue?: (number|null);

                        /** AnyValue arrayValue */
                        arrayValue?: (opentelemetry.proto.common.v1.ArrayValue.$Properties|null);

                        /** AnyValue kvlistValue */
                        kvlistValue?: (opentelemetry.proto.common.v1.KeyValueList.$Properties|null);

                        /** AnyValue bytesValue */
                        bytesValue?: (Uint8Array|null);

                        /** AnyValue stringValueStrindex */
                        stringValueStrindex?: (number|null);

                        /** AnyValue value */
                        value?: ("stringValue"|"boolValue"|"intValue"|"doubleValue"|"arrayValue"|"kvlistValue"|"bytesValue"|"stringValueStrindex");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of an AnyValue. */
                    type $Shape = {
                      stringValue?: string|null;
                      boolValue?: boolean|null;
                      intValue?: number|Long|null;
                      doubleValue?: number|null;
                      arrayValue?: opentelemetry.proto.common.v1.ArrayValue.$Shape|null;
                      kvlistValue?: opentelemetry.proto.common.v1.KeyValueList.$Shape|null;
                      bytesValue?: Uint8Array|null;
                      stringValueStrindex?: number|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ value?: undefined; stringValue?: null; boolValue?: null; intValue?: null; doubleValue?: null; arrayValue?: null; kvlistValue?: null; bytesValue?: null; stringValueStrindex?: null }|{ value?: "stringValue"; stringValue: string; boolValue?: null; intValue?: null; doubleValue?: null; arrayValue?: null; kvlistValue?: null; bytesValue?: null; stringValueStrindex?: null }|{ value?: "boolValue"; stringValue?: null; boolValue: boolean; intValue?: null; doubleValue?: null; arrayValue?: null; kvlistValue?: null; bytesValue?: null; stringValueStrindex?: null }|{ value?: "intValue"; stringValue?: null; boolValue?: null; intValue: number|Long; doubleValue?: null; arrayValue?: null; kvlistValue?: null; bytesValue?: null; stringValueStrindex?: null }|{ value?: "doubleValue"; stringValue?: null; boolValue?: null; intValue?: null; doubleValue: number; arrayValue?: null; kvlistValue?: null; bytesValue?: null; stringValueStrindex?: null }|{ value?: "arrayValue"; stringValue?: null; boolValue?: null; intValue?: null; doubleValue?: null; arrayValue: opentelemetry.proto.common.v1.ArrayValue.$Shape; kvlistValue?: null; bytesValue?: null; stringValueStrindex?: null }|{ value?: "kvlistValue"; stringValue?: null; boolValue?: null; intValue?: null; doubleValue?: null; arrayValue?: null; kvlistValue: opentelemetry.proto.common.v1.KeyValueList.$Shape; bytesValue?: null; stringValueStrindex?: null }|{ value?: "bytesValue"; stringValue?: null; boolValue?: null; intValue?: null; doubleValue?: null; arrayValue?: null; kvlistValue?: null; bytesValue: Uint8Array; stringValueStrindex?: null }|{ value?: "stringValueStrindex"; stringValue?: null; boolValue?: null; intValue?: null; doubleValue?: null; arrayValue?: null; kvlistValue?: null; bytesValue?: null; stringValueStrindex: number })
                    );
                }

                /**
                 * Properties of an ArrayValue.
                 * @deprecated Use opentelemetry.proto.common.v1.ArrayValue.$Properties instead.
                 */
                interface IArrayValue extends opentelemetry.proto.common.v1.ArrayValue.$Properties {
                }

                /** Represents an ArrayValue. */
                class ArrayValue {

                    /**
                     * Constructs a new ArrayValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.ArrayValue.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ArrayValue values. */
                    values: opentelemetry.proto.common.v1.AnyValue.$Properties[];

                    /**
                     * Encodes the specified ArrayValue message. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @param message ArrayValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.common.v1.ArrayValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.ArrayValue & opentelemetry.proto.common.v1.ArrayValue.$Shape} ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.ArrayValue & opentelemetry.proto.common.v1.ArrayValue.$Shape;

                    /**
                     * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ArrayValue
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                     * @param message ArrayValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.common.v1.ArrayValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ArrayValue to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ArrayValue
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ArrayValue {

                    /** Properties of an ArrayValue. */
                    interface $Properties {

                        /** ArrayValue values */
                        values?: (opentelemetry.proto.common.v1.AnyValue.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ArrayValue. */
                    type $Shape = {
                      values?: opentelemetry.proto.common.v1.AnyValue.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a KeyValueList.
                 * @deprecated Use opentelemetry.proto.common.v1.KeyValueList.$Properties instead.
                 */
                interface IKeyValueList extends opentelemetry.proto.common.v1.KeyValueList.$Properties {
                }

                /** Represents a KeyValueList. */
                class KeyValueList {

                    /**
                     * Constructs a new KeyValueList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.KeyValueList.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** KeyValueList values. */
                    values: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /**
                     * Encodes the specified KeyValueList message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @param message KeyValueList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.common.v1.KeyValueList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.KeyValueList & opentelemetry.proto.common.v1.KeyValueList.$Shape} KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.KeyValueList & opentelemetry.proto.common.v1.KeyValueList.$Shape;

                    /**
                     * Creates a KeyValueList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValueList
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Creates a plain object from a KeyValueList message. Also converts values to other types if specified.
                     * @param message KeyValueList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.common.v1.KeyValueList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValueList to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for KeyValueList
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace KeyValueList {

                    /** Properties of a KeyValueList. */
                    interface $Properties {

                        /** KeyValueList values */
                        values?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a KeyValueList. */
                    type $Shape = {
                      values?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a KeyValue.
                 * @deprecated Use opentelemetry.proto.common.v1.KeyValue.$Properties instead.
                 */
                interface IKeyValue extends opentelemetry.proto.common.v1.KeyValue.$Properties {
                }

                /** Represents a KeyValue. */
                class KeyValue {

                    /**
                     * Constructs a new KeyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.KeyValue.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** KeyValue key. */
                    key: string;

                    /** KeyValue value. */
                    value?: (opentelemetry.proto.common.v1.AnyValue.$Properties|null);

                    /** KeyValue keyStrindex. */
                    keyStrindex: number;

                    /**
                     * Encodes the specified KeyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.common.v1.KeyValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.KeyValue & opentelemetry.proto.common.v1.KeyValue.$Shape} KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.KeyValue & opentelemetry.proto.common.v1.KeyValue.$Shape;

                    /**
                     * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValue
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                     * @param message KeyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.common.v1.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValue to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for KeyValue
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace KeyValue {

                    /** Properties of a KeyValue. */
                    interface $Properties {

                        /** KeyValue key */
                        key?: (string|null);

                        /** KeyValue value */
                        value?: (opentelemetry.proto.common.v1.AnyValue.$Properties|null);

                        /** KeyValue keyStrindex */
                        keyStrindex?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a KeyValue. */
                    type $Shape = {
                      key?: string|null;
                      value?: opentelemetry.proto.common.v1.AnyValue.$Shape|null;
                      keyStrindex?: number|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of an InstrumentationScope.
                 * @deprecated Use opentelemetry.proto.common.v1.InstrumentationScope.$Properties instead.
                 */
                interface IInstrumentationScope extends opentelemetry.proto.common.v1.InstrumentationScope.$Properties {
                }

                /** Represents an InstrumentationScope. */
                class InstrumentationScope {

                    /**
                     * Constructs a new InstrumentationScope.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.InstrumentationScope.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** InstrumentationScope name. */
                    name: string;

                    /** InstrumentationScope version. */
                    version: string;

                    /** InstrumentationScope attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** InstrumentationScope droppedAttributesCount. */
                    droppedAttributesCount: number;

                    /**
                     * Encodes the specified InstrumentationScope message. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @param message InstrumentationScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.common.v1.InstrumentationScope.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope & opentelemetry.proto.common.v1.InstrumentationScope.$Shape} InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.InstrumentationScope & opentelemetry.proto.common.v1.InstrumentationScope.$Shape;

                    /**
                     * Creates an InstrumentationScope message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstrumentationScope
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Creates a plain object from an InstrumentationScope message. Also converts values to other types if specified.
                     * @param message InstrumentationScope
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.common.v1.InstrumentationScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstrumentationScope to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for InstrumentationScope
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace InstrumentationScope {

                    /** Properties of an InstrumentationScope. */
                    interface $Properties {

                        /** InstrumentationScope name */
                        name?: (string|null);

                        /** InstrumentationScope version */
                        version?: (string|null);

                        /** InstrumentationScope attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** InstrumentationScope droppedAttributesCount */
                        droppedAttributesCount?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an InstrumentationScope. */
                    type $Shape = {
                      name?: string|null;
                      version?: string|null;
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      droppedAttributesCount?: number|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of an EntityRef.
                 * @deprecated Use opentelemetry.proto.common.v1.EntityRef.$Properties instead.
                 */
                interface IEntityRef extends opentelemetry.proto.common.v1.EntityRef.$Properties {
                }

                /** Represents an EntityRef. */
                class EntityRef {

                    /**
                     * Constructs a new EntityRef.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.EntityRef.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** EntityRef schemaUrl. */
                    schemaUrl: string;

                    /** EntityRef type. */
                    type: string;

                    /** EntityRef idKeys. */
                    idKeys: string[];

                    /** EntityRef descriptionKeys. */
                    descriptionKeys: string[];

                    /**
                     * Encodes the specified EntityRef message. Does not implicitly {@link opentelemetry.proto.common.v1.EntityRef.verify|verify} messages.
                     * @param message EntityRef message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.common.v1.EntityRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntityRef message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.EntityRef & opentelemetry.proto.common.v1.EntityRef.$Shape} EntityRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.EntityRef & opentelemetry.proto.common.v1.EntityRef.$Shape;

                    /**
                     * Creates an EntityRef message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntityRef
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.EntityRef;

                    /**
                     * Creates a plain object from an EntityRef message. Also converts values to other types if specified.
                     * @param message EntityRef
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.common.v1.EntityRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntityRef to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for EntityRef
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace EntityRef {

                    /** Properties of an EntityRef. */
                    interface $Properties {

                        /** EntityRef schemaUrl */
                        schemaUrl?: (string|null);

                        /** EntityRef type */
                        type?: (string|null);

                        /** EntityRef idKeys */
                        idKeys?: (string[]|null);

                        /** EntityRef descriptionKeys */
                        descriptionKeys?: (string[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an EntityRef. */
                    type $Shape = opentelemetry.proto.common.v1.EntityRef.$Properties;
                }
            }
        }

        /** Namespace resource. */
        namespace resource {

            /** Namespace v1. */
            namespace v1 {

                /**
                 * Properties of a Resource.
                 * @deprecated Use opentelemetry.proto.resource.v1.Resource.$Properties instead.
                 */
                interface IResource extends opentelemetry.proto.resource.v1.Resource.$Properties {
                }

                /** Represents a Resource. */
                class Resource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.resource.v1.Resource.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Resource attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** Resource droppedAttributesCount. */
                    droppedAttributesCount: number;

                    /** Resource entityRefs. */
                    entityRefs: opentelemetry.proto.common.v1.EntityRef.$Properties[];

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.resource.v1.Resource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.resource.v1.Resource & opentelemetry.proto.resource.v1.Resource.$Shape} Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.resource.v1.Resource & opentelemetry.proto.resource.v1.Resource.$Shape;

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.resource.v1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Resource
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Resource {

                    /** Properties of a Resource. */
                    interface $Properties {

                        /** Resource attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** Resource droppedAttributesCount */
                        droppedAttributesCount?: (number|null);

                        /** Resource entityRefs */
                        entityRefs?: (opentelemetry.proto.common.v1.EntityRef.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Resource. */
                    type $Shape = {
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      droppedAttributesCount?: number|null;
                      entityRefs?: opentelemetry.proto.common.v1.EntityRef.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }
            }
        }

        /** Namespace metrics. */
        namespace metrics {

            /** Namespace v1. */
            namespace v1 {

                /**
                 * Properties of a MetricsData.
                 * @deprecated Use opentelemetry.proto.metrics.v1.MetricsData.$Properties instead.
                 */
                interface IMetricsData extends opentelemetry.proto.metrics.v1.MetricsData.$Properties {
                }

                /** Represents a MetricsData. */
                class MetricsData {

                    /**
                     * Constructs a new MetricsData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.MetricsData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MetricsData resourceMetrics. */
                    resourceMetrics: opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties[];

                    /**
                     * Encodes the specified MetricsData message. Does not implicitly {@link opentelemetry.proto.metrics.v1.MetricsData.verify|verify} messages.
                     * @param message MetricsData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.MetricsData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricsData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.MetricsData & opentelemetry.proto.metrics.v1.MetricsData.$Shape} MetricsData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.MetricsData & opentelemetry.proto.metrics.v1.MetricsData.$Shape;

                    /**
                     * Creates a MetricsData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricsData
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.MetricsData;

                    /**
                     * Creates a plain object from a MetricsData message. Also converts values to other types if specified.
                     * @param message MetricsData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.MetricsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricsData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for MetricsData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MetricsData {

                    /** Properties of a MetricsData. */
                    interface $Properties {

                        /** MetricsData resourceMetrics */
                        resourceMetrics?: (opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MetricsData. */
                    type $Shape = {
                      resourceMetrics?: opentelemetry.proto.metrics.v1.ResourceMetrics.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a ResourceMetrics.
                 * @deprecated Use opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties instead.
                 */
                interface IResourceMetrics extends opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties {
                }

                /** Represents a ResourceMetrics. */
                class ResourceMetrics {

                    /**
                     * Constructs a new ResourceMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ResourceMetrics resource. */
                    resource?: (opentelemetry.proto.resource.v1.Resource.$Properties|null);

                    /** ResourceMetrics scopeMetrics. */
                    scopeMetrics: opentelemetry.proto.metrics.v1.ScopeMetrics.$Properties[];

                    /** ResourceMetrics schemaUrl. */
                    schemaUrl: string;

                    /**
                     * Encodes the specified ResourceMetrics message. Does not implicitly {@link opentelemetry.proto.metrics.v1.ResourceMetrics.verify|verify} messages.
                     * @param message ResourceMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.ResourceMetrics.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.ResourceMetrics & opentelemetry.proto.metrics.v1.ResourceMetrics.$Shape} ResourceMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.ResourceMetrics & opentelemetry.proto.metrics.v1.ResourceMetrics.$Shape;

                    /**
                     * Creates a ResourceMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceMetrics
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.ResourceMetrics;

                    /**
                     * Creates a plain object from a ResourceMetrics message. Also converts values to other types if specified.
                     * @param message ResourceMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.ResourceMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceMetrics to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ResourceMetrics
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ResourceMetrics {

                    /** Properties of a ResourceMetrics. */
                    interface $Properties {

                        /** ResourceMetrics resource */
                        resource?: (opentelemetry.proto.resource.v1.Resource.$Properties|null);

                        /** ResourceMetrics scopeMetrics */
                        scopeMetrics?: (opentelemetry.proto.metrics.v1.ScopeMetrics.$Properties[]|null);

                        /** ResourceMetrics schemaUrl */
                        schemaUrl?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ResourceMetrics. */
                    type $Shape = {
                      resource?: opentelemetry.proto.resource.v1.Resource.$Shape|null;
                      scopeMetrics?: opentelemetry.proto.metrics.v1.ScopeMetrics.$Shape[]|null;
                      schemaUrl?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a ScopeMetrics.
                 * @deprecated Use opentelemetry.proto.metrics.v1.ScopeMetrics.$Properties instead.
                 */
                interface IScopeMetrics extends opentelemetry.proto.metrics.v1.ScopeMetrics.$Properties {
                }

                /** Represents a ScopeMetrics. */
                class ScopeMetrics {

                    /**
                     * Constructs a new ScopeMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.ScopeMetrics.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ScopeMetrics scope. */
                    scope?: (opentelemetry.proto.common.v1.InstrumentationScope.$Properties|null);

                    /** ScopeMetrics metrics. */
                    metrics: opentelemetry.proto.metrics.v1.Metric.$Properties[];

                    /** ScopeMetrics schemaUrl. */
                    schemaUrl: string;

                    /**
                     * Encodes the specified ScopeMetrics message. Does not implicitly {@link opentelemetry.proto.metrics.v1.ScopeMetrics.verify|verify} messages.
                     * @param message ScopeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.ScopeMetrics.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.ScopeMetrics & opentelemetry.proto.metrics.v1.ScopeMetrics.$Shape} ScopeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.ScopeMetrics & opentelemetry.proto.metrics.v1.ScopeMetrics.$Shape;

                    /**
                     * Creates a ScopeMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeMetrics
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.ScopeMetrics;

                    /**
                     * Creates a plain object from a ScopeMetrics message. Also converts values to other types if specified.
                     * @param message ScopeMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.ScopeMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeMetrics to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ScopeMetrics
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ScopeMetrics {

                    /** Properties of a ScopeMetrics. */
                    interface $Properties {

                        /** ScopeMetrics scope */
                        scope?: (opentelemetry.proto.common.v1.InstrumentationScope.$Properties|null);

                        /** ScopeMetrics metrics */
                        metrics?: (opentelemetry.proto.metrics.v1.Metric.$Properties[]|null);

                        /** ScopeMetrics schemaUrl */
                        schemaUrl?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ScopeMetrics. */
                    type $Shape = {
                      scope?: opentelemetry.proto.common.v1.InstrumentationScope.$Shape|null;
                      metrics?: opentelemetry.proto.metrics.v1.Metric.$Shape[]|null;
                      schemaUrl?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a Metric.
                 * @deprecated Use opentelemetry.proto.metrics.v1.Metric.$Properties instead.
                 */
                interface IMetric extends opentelemetry.proto.metrics.v1.Metric.$Properties {
                }

                /** Represents a Metric. */
                class Metric {

                    /**
                     * Constructs a new Metric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.Metric.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Metric name. */
                    name: string;

                    /** Metric description. */
                    description: string;

                    /** Metric unit. */
                    unit: string;

                    /** Metric gauge. */
                    gauge?: (opentelemetry.proto.metrics.v1.Gauge.$Properties|null);

                    /** Metric sum. */
                    sum?: (opentelemetry.proto.metrics.v1.Sum.$Properties|null);

                    /** Metric histogram. */
                    histogram?: (opentelemetry.proto.metrics.v1.Histogram.$Properties|null);

                    /** Metric exponentialHistogram. */
                    exponentialHistogram?: (opentelemetry.proto.metrics.v1.ExponentialHistogram.$Properties|null);

                    /** Metric summary. */
                    summary?: (opentelemetry.proto.metrics.v1.Summary.$Properties|null);

                    /** Metric metadata. */
                    metadata: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** Metric data. */
                    data?: ("gauge"|"sum"|"histogram"|"exponentialHistogram"|"summary");

                    /**
                     * Encodes the specified Metric message. Does not implicitly {@link opentelemetry.proto.metrics.v1.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.Metric.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.Metric & opentelemetry.proto.metrics.v1.Metric.$Shape} Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.Metric & opentelemetry.proto.metrics.v1.Metric.$Shape;

                    /**
                     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metric
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.Metric;

                    /**
                     * Creates a plain object from a Metric message. Also converts values to other types if specified.
                     * @param message Metric
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metric to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Metric
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Metric {

                    /** Properties of a Metric. */
                    interface $Properties {

                        /** Metric name */
                        name?: (string|null);

                        /** Metric description */
                        description?: (string|null);

                        /** Metric unit */
                        unit?: (string|null);

                        /** Metric gauge */
                        gauge?: (opentelemetry.proto.metrics.v1.Gauge.$Properties|null);

                        /** Metric sum */
                        sum?: (opentelemetry.proto.metrics.v1.Sum.$Properties|null);

                        /** Metric histogram */
                        histogram?: (opentelemetry.proto.metrics.v1.Histogram.$Properties|null);

                        /** Metric exponentialHistogram */
                        exponentialHistogram?: (opentelemetry.proto.metrics.v1.ExponentialHistogram.$Properties|null);

                        /** Metric summary */
                        summary?: (opentelemetry.proto.metrics.v1.Summary.$Properties|null);

                        /** Metric metadata */
                        metadata?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** Metric data */
                        data?: ("gauge"|"sum"|"histogram"|"exponentialHistogram"|"summary");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of a Metric. */
                    type $Shape = {
                      name?: string|null;
                      description?: string|null;
                      unit?: string|null;
                      gauge?: opentelemetry.proto.metrics.v1.Gauge.$Shape|null;
                      sum?: opentelemetry.proto.metrics.v1.Sum.$Shape|null;
                      histogram?: opentelemetry.proto.metrics.v1.Histogram.$Shape|null;
                      exponentialHistogram?: opentelemetry.proto.metrics.v1.ExponentialHistogram.$Shape|null;
                      summary?: opentelemetry.proto.metrics.v1.Summary.$Shape|null;
                      metadata?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ data?: undefined; gauge?: null; sum?: null; histogram?: null; exponentialHistogram?: null; summary?: null }|{ data?: "gauge"; gauge: opentelemetry.proto.metrics.v1.Gauge.$Shape; sum?: null; histogram?: null; exponentialHistogram?: null; summary?: null }|{ data?: "sum"; gauge?: null; sum: opentelemetry.proto.metrics.v1.Sum.$Shape; histogram?: null; exponentialHistogram?: null; summary?: null }|{ data?: "histogram"; gauge?: null; sum?: null; histogram: opentelemetry.proto.metrics.v1.Histogram.$Shape; exponentialHistogram?: null; summary?: null }|{ data?: "exponentialHistogram"; gauge?: null; sum?: null; histogram?: null; exponentialHistogram: opentelemetry.proto.metrics.v1.ExponentialHistogram.$Shape; summary?: null }|{ data?: "summary"; gauge?: null; sum?: null; histogram?: null; exponentialHistogram?: null; summary: opentelemetry.proto.metrics.v1.Summary.$Shape })
                    );
                }

                /**
                 * Properties of a Gauge.
                 * @deprecated Use opentelemetry.proto.metrics.v1.Gauge.$Properties instead.
                 */
                interface IGauge extends opentelemetry.proto.metrics.v1.Gauge.$Properties {
                }

                /** Represents a Gauge. */
                class Gauge {

                    /**
                     * Constructs a new Gauge.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.Gauge.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Gauge dataPoints. */
                    dataPoints: opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties[];

                    /**
                     * Encodes the specified Gauge message. Does not implicitly {@link opentelemetry.proto.metrics.v1.Gauge.verify|verify} messages.
                     * @param message Gauge message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.Gauge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Gauge message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.Gauge & opentelemetry.proto.metrics.v1.Gauge.$Shape} Gauge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.Gauge & opentelemetry.proto.metrics.v1.Gauge.$Shape;

                    /**
                     * Creates a Gauge message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Gauge
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.Gauge;

                    /**
                     * Creates a plain object from a Gauge message. Also converts values to other types if specified.
                     * @param message Gauge
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.Gauge, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Gauge to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Gauge
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Gauge {

                    /** Properties of a Gauge. */
                    interface $Properties {

                        /** Gauge dataPoints */
                        dataPoints?: (opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Gauge. */
                    type $Shape = {
                      dataPoints?: opentelemetry.proto.metrics.v1.NumberDataPoint.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a Sum.
                 * @deprecated Use opentelemetry.proto.metrics.v1.Sum.$Properties instead.
                 */
                interface ISum extends opentelemetry.proto.metrics.v1.Sum.$Properties {
                }

                /** Represents a Sum. */
                class Sum {

                    /**
                     * Constructs a new Sum.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.Sum.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Sum dataPoints. */
                    dataPoints: opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties[];

                    /** Sum aggregationTemporality. */
                    aggregationTemporality: opentelemetry.proto.metrics.v1.AggregationTemporality;

                    /** Sum isMonotonic. */
                    isMonotonic: boolean;

                    /**
                     * Encodes the specified Sum message. Does not implicitly {@link opentelemetry.proto.metrics.v1.Sum.verify|verify} messages.
                     * @param message Sum message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.Sum.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sum message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.Sum & opentelemetry.proto.metrics.v1.Sum.$Shape} Sum
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.Sum & opentelemetry.proto.metrics.v1.Sum.$Shape;

                    /**
                     * Creates a Sum message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sum
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.Sum;

                    /**
                     * Creates a plain object from a Sum message. Also converts values to other types if specified.
                     * @param message Sum
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.Sum, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sum to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Sum
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Sum {

                    /** Properties of a Sum. */
                    interface $Properties {

                        /** Sum dataPoints */
                        dataPoints?: (opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties[]|null);

                        /** Sum aggregationTemporality */
                        aggregationTemporality?: (opentelemetry.proto.metrics.v1.AggregationTemporality|null);

                        /** Sum isMonotonic */
                        isMonotonic?: (boolean|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Sum. */
                    type $Shape = {
                      dataPoints?: opentelemetry.proto.metrics.v1.NumberDataPoint.$Shape[]|null;
                      aggregationTemporality?: opentelemetry.proto.metrics.v1.AggregationTemporality|null;
                      isMonotonic?: boolean|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a Histogram.
                 * @deprecated Use opentelemetry.proto.metrics.v1.Histogram.$Properties instead.
                 */
                interface IHistogram extends opentelemetry.proto.metrics.v1.Histogram.$Properties {
                }

                /** Represents a Histogram. */
                class Histogram {

                    /**
                     * Constructs a new Histogram.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.Histogram.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Histogram dataPoints. */
                    dataPoints: opentelemetry.proto.metrics.v1.HistogramDataPoint.$Properties[];

                    /** Histogram aggregationTemporality. */
                    aggregationTemporality: opentelemetry.proto.metrics.v1.AggregationTemporality;

                    /**
                     * Encodes the specified Histogram message. Does not implicitly {@link opentelemetry.proto.metrics.v1.Histogram.verify|verify} messages.
                     * @param message Histogram message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.Histogram.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Histogram message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.Histogram & opentelemetry.proto.metrics.v1.Histogram.$Shape} Histogram
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.Histogram & opentelemetry.proto.metrics.v1.Histogram.$Shape;

                    /**
                     * Creates a Histogram message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Histogram
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.Histogram;

                    /**
                     * Creates a plain object from a Histogram message. Also converts values to other types if specified.
                     * @param message Histogram
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.Histogram, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Histogram to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Histogram
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Histogram {

                    /** Properties of a Histogram. */
                    interface $Properties {

                        /** Histogram dataPoints */
                        dataPoints?: (opentelemetry.proto.metrics.v1.HistogramDataPoint.$Properties[]|null);

                        /** Histogram aggregationTemporality */
                        aggregationTemporality?: (opentelemetry.proto.metrics.v1.AggregationTemporality|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Histogram. */
                    type $Shape = {
                      dataPoints?: opentelemetry.proto.metrics.v1.HistogramDataPoint.$Shape[]|null;
                      aggregationTemporality?: opentelemetry.proto.metrics.v1.AggregationTemporality|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of an ExponentialHistogram.
                 * @deprecated Use opentelemetry.proto.metrics.v1.ExponentialHistogram.$Properties instead.
                 */
                interface IExponentialHistogram extends opentelemetry.proto.metrics.v1.ExponentialHistogram.$Properties {
                }

                /** Represents an ExponentialHistogram. */
                class ExponentialHistogram {

                    /**
                     * Constructs a new ExponentialHistogram.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.ExponentialHistogram.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ExponentialHistogram dataPoints. */
                    dataPoints: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Properties[];

                    /** ExponentialHistogram aggregationTemporality. */
                    aggregationTemporality: opentelemetry.proto.metrics.v1.AggregationTemporality;

                    /**
                     * Encodes the specified ExponentialHistogram message. Does not implicitly {@link opentelemetry.proto.metrics.v1.ExponentialHistogram.verify|verify} messages.
                     * @param message ExponentialHistogram message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.ExponentialHistogram.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExponentialHistogram message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.ExponentialHistogram & opentelemetry.proto.metrics.v1.ExponentialHistogram.$Shape} ExponentialHistogram
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.ExponentialHistogram & opentelemetry.proto.metrics.v1.ExponentialHistogram.$Shape;

                    /**
                     * Creates an ExponentialHistogram message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExponentialHistogram
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.ExponentialHistogram;

                    /**
                     * Creates a plain object from an ExponentialHistogram message. Also converts values to other types if specified.
                     * @param message ExponentialHistogram
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.ExponentialHistogram, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExponentialHistogram to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ExponentialHistogram
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ExponentialHistogram {

                    /** Properties of an ExponentialHistogram. */
                    interface $Properties {

                        /** ExponentialHistogram dataPoints */
                        dataPoints?: (opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Properties[]|null);

                        /** ExponentialHistogram aggregationTemporality */
                        aggregationTemporality?: (opentelemetry.proto.metrics.v1.AggregationTemporality|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ExponentialHistogram. */
                    type $Shape = {
                      dataPoints?: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Shape[]|null;
                      aggregationTemporality?: opentelemetry.proto.metrics.v1.AggregationTemporality|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a Summary.
                 * @deprecated Use opentelemetry.proto.metrics.v1.Summary.$Properties instead.
                 */
                interface ISummary extends opentelemetry.proto.metrics.v1.Summary.$Properties {
                }

                /** Represents a Summary. */
                class Summary {

                    /**
                     * Constructs a new Summary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.Summary.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Summary dataPoints. */
                    dataPoints: opentelemetry.proto.metrics.v1.SummaryDataPoint.$Properties[];

                    /**
                     * Encodes the specified Summary message. Does not implicitly {@link opentelemetry.proto.metrics.v1.Summary.verify|verify} messages.
                     * @param message Summary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.Summary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Summary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.Summary & opentelemetry.proto.metrics.v1.Summary.$Shape} Summary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.Summary & opentelemetry.proto.metrics.v1.Summary.$Shape;

                    /**
                     * Creates a Summary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Summary
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.Summary;

                    /**
                     * Creates a plain object from a Summary message. Also converts values to other types if specified.
                     * @param message Summary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.Summary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Summary to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Summary
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Summary {

                    /** Properties of a Summary. */
                    interface $Properties {

                        /** Summary dataPoints */
                        dataPoints?: (opentelemetry.proto.metrics.v1.SummaryDataPoint.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Summary. */
                    type $Shape = {
                      dataPoints?: opentelemetry.proto.metrics.v1.SummaryDataPoint.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /** AggregationTemporality enum. */
                enum AggregationTemporality {

                    /** AGGREGATION_TEMPORALITY_UNSPECIFIED value */
                    AGGREGATION_TEMPORALITY_UNSPECIFIED = 0,

                    /** AGGREGATION_TEMPORALITY_DELTA value */
                    AGGREGATION_TEMPORALITY_DELTA = 1,

                    /** AGGREGATION_TEMPORALITY_CUMULATIVE value */
                    AGGREGATION_TEMPORALITY_CUMULATIVE = 2
                }

                /** DataPointFlags enum. */
                enum DataPointFlags {

                    /** DATA_POINT_FLAGS_DO_NOT_USE value */
                    DATA_POINT_FLAGS_DO_NOT_USE = 0,

                    /** DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK value */
                    DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK = 1
                }

                /**
                 * Properties of a NumberDataPoint.
                 * @deprecated Use opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties instead.
                 */
                interface INumberDataPoint extends opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties {
                }

                /** Represents a NumberDataPoint. */
                class NumberDataPoint {

                    /**
                     * Constructs a new NumberDataPoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** NumberDataPoint attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** NumberDataPoint startTimeUnixNano. */
                    startTimeUnixNano: (number|Long);

                    /** NumberDataPoint timeUnixNano. */
                    timeUnixNano: (number|Long);

                    /** NumberDataPoint asDouble. */
                    asDouble?: (number|null);

                    /** NumberDataPoint asInt. */
                    asInt?: (number|Long|null);

                    /** NumberDataPoint exemplars. */
                    exemplars: opentelemetry.proto.metrics.v1.Exemplar.$Properties[];

                    /** NumberDataPoint flags. */
                    flags: number;

                    /** NumberDataPoint value. */
                    value?: ("asDouble"|"asInt");

                    /**
                     * Encodes the specified NumberDataPoint message. Does not implicitly {@link opentelemetry.proto.metrics.v1.NumberDataPoint.verify|verify} messages.
                     * @param message NumberDataPoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.NumberDataPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NumberDataPoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.NumberDataPoint & opentelemetry.proto.metrics.v1.NumberDataPoint.$Shape} NumberDataPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.NumberDataPoint & opentelemetry.proto.metrics.v1.NumberDataPoint.$Shape;

                    /**
                     * Creates a NumberDataPoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NumberDataPoint
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.NumberDataPoint;

                    /**
                     * Creates a plain object from a NumberDataPoint message. Also converts values to other types if specified.
                     * @param message NumberDataPoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.NumberDataPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NumberDataPoint to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for NumberDataPoint
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace NumberDataPoint {

                    /** Properties of a NumberDataPoint. */
                    interface $Properties {

                        /** NumberDataPoint attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** NumberDataPoint startTimeUnixNano */
                        startTimeUnixNano?: (number|Long|null);

                        /** NumberDataPoint timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** NumberDataPoint asDouble */
                        asDouble?: (number|null);

                        /** NumberDataPoint asInt */
                        asInt?: (number|Long|null);

                        /** NumberDataPoint exemplars */
                        exemplars?: (opentelemetry.proto.metrics.v1.Exemplar.$Properties[]|null);

                        /** NumberDataPoint flags */
                        flags?: (number|null);

                        /** NumberDataPoint value */
                        value?: ("asDouble"|"asInt");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of a NumberDataPoint. */
                    type $Shape = {
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      startTimeUnixNano?: number|Long|null;
                      timeUnixNano?: number|Long|null;
                      asDouble?: number|null;
                      asInt?: number|Long|null;
                      exemplars?: opentelemetry.proto.metrics.v1.Exemplar.$Shape[]|null;
                      flags?: number|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ value?: undefined; asDouble?: null; asInt?: null }|{ value?: "asDouble"; asDouble: number; asInt?: null }|{ value?: "asInt"; asDouble?: null; asInt: number|Long })
                    );
                }

                /**
                 * Properties of a HistogramDataPoint.
                 * @deprecated Use opentelemetry.proto.metrics.v1.HistogramDataPoint.$Properties instead.
                 */
                interface IHistogramDataPoint extends opentelemetry.proto.metrics.v1.HistogramDataPoint.$Properties {
                }

                /** Represents a HistogramDataPoint. */
                class HistogramDataPoint {

                    /**
                     * Constructs a new HistogramDataPoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.HistogramDataPoint.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** HistogramDataPoint attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** HistogramDataPoint startTimeUnixNano. */
                    startTimeUnixNano: (number|Long);

                    /** HistogramDataPoint timeUnixNano. */
                    timeUnixNano: (number|Long);

                    /** HistogramDataPoint count. */
                    count: (number|Long);

                    /** HistogramDataPoint sum. */
                    sum?: (number|null);

                    /** HistogramDataPoint bucketCounts. */
                    bucketCounts: (number|Long)[];

                    /** HistogramDataPoint explicitBounds. */
                    explicitBounds: number[];

                    /** HistogramDataPoint exemplars. */
                    exemplars: opentelemetry.proto.metrics.v1.Exemplar.$Properties[];

                    /** HistogramDataPoint flags. */
                    flags: number;

                    /** HistogramDataPoint min. */
                    min?: (number|null);

                    /** HistogramDataPoint max. */
                    max?: (number|null);

                    /**
                     * Encodes the specified HistogramDataPoint message. Does not implicitly {@link opentelemetry.proto.metrics.v1.HistogramDataPoint.verify|verify} messages.
                     * @param message HistogramDataPoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.HistogramDataPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HistogramDataPoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.HistogramDataPoint & opentelemetry.proto.metrics.v1.HistogramDataPoint.$Shape} HistogramDataPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.HistogramDataPoint & opentelemetry.proto.metrics.v1.HistogramDataPoint.$Shape;

                    /**
                     * Creates a HistogramDataPoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HistogramDataPoint
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.HistogramDataPoint;

                    /**
                     * Creates a plain object from a HistogramDataPoint message. Also converts values to other types if specified.
                     * @param message HistogramDataPoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.HistogramDataPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HistogramDataPoint to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for HistogramDataPoint
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace HistogramDataPoint {

                    /** Properties of a HistogramDataPoint. */
                    interface $Properties {

                        /** HistogramDataPoint attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** HistogramDataPoint startTimeUnixNano */
                        startTimeUnixNano?: (number|Long|null);

                        /** HistogramDataPoint timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** HistogramDataPoint count */
                        count?: (number|Long|null);

                        /** HistogramDataPoint sum */
                        sum?: (number|null);

                        /** HistogramDataPoint bucketCounts */
                        bucketCounts?: ((number|Long)[]|null);

                        /** HistogramDataPoint explicitBounds */
                        explicitBounds?: (number[]|null);

                        /** HistogramDataPoint exemplars */
                        exemplars?: (opentelemetry.proto.metrics.v1.Exemplar.$Properties[]|null);

                        /** HistogramDataPoint flags */
                        flags?: (number|null);

                        /** HistogramDataPoint min */
                        min?: (number|null);

                        /** HistogramDataPoint max */
                        max?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a HistogramDataPoint. */
                    type $Shape = {
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      startTimeUnixNano?: number|Long|null;
                      timeUnixNano?: number|Long|null;
                      count?: number|Long|null;
                      sum?: number|null;
                      bucketCounts?: (number|Long)[]|null;
                      explicitBounds?: number[]|null;
                      exemplars?: opentelemetry.proto.metrics.v1.Exemplar.$Shape[]|null;
                      flags?: number|null;
                      min?: number|null;
                      max?: number|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of an ExponentialHistogramDataPoint.
                 * @deprecated Use opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Properties instead.
                 */
                interface IExponentialHistogramDataPoint extends opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Properties {
                }

                /** Represents an ExponentialHistogramDataPoint. */
                class ExponentialHistogramDataPoint {

                    /**
                     * Constructs a new ExponentialHistogramDataPoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ExponentialHistogramDataPoint attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** ExponentialHistogramDataPoint startTimeUnixNano. */
                    startTimeUnixNano: (number|Long);

                    /** ExponentialHistogramDataPoint timeUnixNano. */
                    timeUnixNano: (number|Long);

                    /** ExponentialHistogramDataPoint count. */
                    count: (number|Long);

                    /** ExponentialHistogramDataPoint sum. */
                    sum?: (number|null);

                    /** ExponentialHistogramDataPoint scale. */
                    scale: number;

                    /** ExponentialHistogramDataPoint zeroCount. */
                    zeroCount: (number|Long);

                    /** ExponentialHistogramDataPoint positive. */
                    positive?: (opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties|null);

                    /** ExponentialHistogramDataPoint negative. */
                    negative?: (opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties|null);

                    /** ExponentialHistogramDataPoint flags. */
                    flags: number;

                    /** ExponentialHistogramDataPoint exemplars. */
                    exemplars: opentelemetry.proto.metrics.v1.Exemplar.$Properties[];

                    /** ExponentialHistogramDataPoint min. */
                    min?: (number|null);

                    /** ExponentialHistogramDataPoint max. */
                    max?: (number|null);

                    /** ExponentialHistogramDataPoint zeroThreshold. */
                    zeroThreshold: number;

                    /**
                     * Encodes the specified ExponentialHistogramDataPoint message. Does not implicitly {@link opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify|verify} messages.
                     * @param message ExponentialHistogramDataPoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExponentialHistogramDataPoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint & opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Shape} ExponentialHistogramDataPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint & opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.$Shape;

                    /**
                     * Creates an ExponentialHistogramDataPoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExponentialHistogramDataPoint
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;

                    /**
                     * Creates a plain object from an ExponentialHistogramDataPoint message. Also converts values to other types if specified.
                     * @param message ExponentialHistogramDataPoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExponentialHistogramDataPoint to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ExponentialHistogramDataPoint
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ExponentialHistogramDataPoint {

                    /** Properties of an ExponentialHistogramDataPoint. */
                    interface $Properties {

                        /** ExponentialHistogramDataPoint attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** ExponentialHistogramDataPoint startTimeUnixNano */
                        startTimeUnixNano?: (number|Long|null);

                        /** ExponentialHistogramDataPoint timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** ExponentialHistogramDataPoint count */
                        count?: (number|Long|null);

                        /** ExponentialHistogramDataPoint sum */
                        sum?: (number|null);

                        /** ExponentialHistogramDataPoint scale */
                        scale?: (number|null);

                        /** ExponentialHistogramDataPoint zeroCount */
                        zeroCount?: (number|Long|null);

                        /** ExponentialHistogramDataPoint positive */
                        positive?: (opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties|null);

                        /** ExponentialHistogramDataPoint negative */
                        negative?: (opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties|null);

                        /** ExponentialHistogramDataPoint flags */
                        flags?: (number|null);

                        /** ExponentialHistogramDataPoint exemplars */
                        exemplars?: (opentelemetry.proto.metrics.v1.Exemplar.$Properties[]|null);

                        /** ExponentialHistogramDataPoint min */
                        min?: (number|null);

                        /** ExponentialHistogramDataPoint max */
                        max?: (number|null);

                        /** ExponentialHistogramDataPoint zeroThreshold */
                        zeroThreshold?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ExponentialHistogramDataPoint. */
                    type $Shape = {
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      startTimeUnixNano?: number|Long|null;
                      timeUnixNano?: number|Long|null;
                      count?: number|Long|null;
                      sum?: number|null;
                      scale?: number|null;
                      zeroCount?: number|Long|null;
                      positive?: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Shape|null;
                      negative?: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Shape|null;
                      flags?: number|null;
                      exemplars?: opentelemetry.proto.metrics.v1.Exemplar.$Shape[]|null;
                      min?: number|null;
                      max?: number|null;
                      zeroThreshold?: number|null;
                      $unknowns?: Uint8Array[];
                    };

                    /**
                     * Properties of a Buckets.
                     * @deprecated Use opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties instead.
                     */
                    interface IBuckets extends opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties {
                    }

                    /** Represents a Buckets. */
                    class Buckets {

                        /**
                         * Constructs a new Buckets.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** Buckets offset. */
                        offset: number;

                        /** Buckets bucketCounts. */
                        bucketCounts: (number|Long)[];

                        /**
                         * Encodes the specified Buckets message. Does not implicitly {@link opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify|verify} messages.
                         * @param message Buckets message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Buckets message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets & opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Shape} Buckets
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets & opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Shape;

                        /**
                         * Creates a Buckets message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Buckets
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;

                        /**
                         * Creates a plain object from a Buckets message. Also converts values to other types if specified.
                         * @param message Buckets
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Buckets to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for Buckets
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace Buckets {

                        /** Properties of a Buckets. */
                        interface $Properties {

                            /** Buckets offset */
                            offset?: (number|null);

                            /** Buckets bucketCounts */
                            bucketCounts?: ((number|Long)[]|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of a Buckets. */
                        type $Shape = opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.$Properties;
                    }
                }

                /**
                 * Properties of a SummaryDataPoint.
                 * @deprecated Use opentelemetry.proto.metrics.v1.SummaryDataPoint.$Properties instead.
                 */
                interface ISummaryDataPoint extends opentelemetry.proto.metrics.v1.SummaryDataPoint.$Properties {
                }

                /** Represents a SummaryDataPoint. */
                class SummaryDataPoint {

                    /**
                     * Constructs a new SummaryDataPoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.SummaryDataPoint.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SummaryDataPoint attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** SummaryDataPoint startTimeUnixNano. */
                    startTimeUnixNano: (number|Long);

                    /** SummaryDataPoint timeUnixNano. */
                    timeUnixNano: (number|Long);

                    /** SummaryDataPoint count. */
                    count: (number|Long);

                    /** SummaryDataPoint sum. */
                    sum: number;

                    /** SummaryDataPoint quantileValues. */
                    quantileValues: opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties[];

                    /** SummaryDataPoint flags. */
                    flags: number;

                    /**
                     * Encodes the specified SummaryDataPoint message. Does not implicitly {@link opentelemetry.proto.metrics.v1.SummaryDataPoint.verify|verify} messages.
                     * @param message SummaryDataPoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.SummaryDataPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SummaryDataPoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.SummaryDataPoint & opentelemetry.proto.metrics.v1.SummaryDataPoint.$Shape} SummaryDataPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.SummaryDataPoint & opentelemetry.proto.metrics.v1.SummaryDataPoint.$Shape;

                    /**
                     * Creates a SummaryDataPoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SummaryDataPoint
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.SummaryDataPoint;

                    /**
                     * Creates a plain object from a SummaryDataPoint message. Also converts values to other types if specified.
                     * @param message SummaryDataPoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.SummaryDataPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SummaryDataPoint to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SummaryDataPoint
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SummaryDataPoint {

                    /** Properties of a SummaryDataPoint. */
                    interface $Properties {

                        /** SummaryDataPoint attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** SummaryDataPoint startTimeUnixNano */
                        startTimeUnixNano?: (number|Long|null);

                        /** SummaryDataPoint timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** SummaryDataPoint count */
                        count?: (number|Long|null);

                        /** SummaryDataPoint sum */
                        sum?: (number|null);

                        /** SummaryDataPoint quantileValues */
                        quantileValues?: (opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties[]|null);

                        /** SummaryDataPoint flags */
                        flags?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SummaryDataPoint. */
                    type $Shape = {
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      startTimeUnixNano?: number|Long|null;
                      timeUnixNano?: number|Long|null;
                      count?: number|Long|null;
                      sum?: number|null;
                      quantileValues?: opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Shape[]|null;
                      flags?: number|null;
                      $unknowns?: Uint8Array[];
                    };

                    /**
                     * Properties of a ValueAtQuantile.
                     * @deprecated Use opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties instead.
                     */
                    interface IValueAtQuantile extends opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties {
                    }

                    /** Represents a ValueAtQuantile. */
                    class ValueAtQuantile {

                        /**
                         * Constructs a new ValueAtQuantile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** ValueAtQuantile quantile. */
                        quantile: number;

                        /** ValueAtQuantile value. */
                        value: number;

                        /**
                         * Encodes the specified ValueAtQuantile message. Does not implicitly {@link opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify|verify} messages.
                         * @param message ValueAtQuantile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ValueAtQuantile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile & opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Shape} ValueAtQuantile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile & opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Shape;

                        /**
                         * Creates a ValueAtQuantile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ValueAtQuantile
                         */
                        static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;

                        /**
                         * Creates a plain object from a ValueAtQuantile message. Also converts values to other types if specified.
                         * @param message ValueAtQuantile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ValueAtQuantile to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for ValueAtQuantile
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace ValueAtQuantile {

                        /** Properties of a ValueAtQuantile. */
                        interface $Properties {

                            /** ValueAtQuantile quantile */
                            quantile?: (number|null);

                            /** ValueAtQuantile value */
                            value?: (number|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of a ValueAtQuantile. */
                        type $Shape = opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.$Properties;
                    }
                }

                /**
                 * Properties of an Exemplar.
                 * @deprecated Use opentelemetry.proto.metrics.v1.Exemplar.$Properties instead.
                 */
                interface IExemplar extends opentelemetry.proto.metrics.v1.Exemplar.$Properties {
                }

                /** Represents an Exemplar. */
                class Exemplar {

                    /**
                     * Constructs a new Exemplar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.metrics.v1.Exemplar.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Exemplar filteredAttributes. */
                    filteredAttributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** Exemplar timeUnixNano. */
                    timeUnixNano: (number|Long);

                    /** Exemplar asDouble. */
                    asDouble?: (number|null);

                    /** Exemplar asInt. */
                    asInt?: (number|Long|null);

                    /** Exemplar spanId. */
                    spanId: Uint8Array;

                    /** Exemplar traceId. */
                    traceId: Uint8Array;

                    /** Exemplar value. */
                    value?: ("asDouble"|"asInt");

                    /**
                     * Encodes the specified Exemplar message. Does not implicitly {@link opentelemetry.proto.metrics.v1.Exemplar.verify|verify} messages.
                     * @param message Exemplar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.metrics.v1.Exemplar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Exemplar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.metrics.v1.Exemplar & opentelemetry.proto.metrics.v1.Exemplar.$Shape} Exemplar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.metrics.v1.Exemplar & opentelemetry.proto.metrics.v1.Exemplar.$Shape;

                    /**
                     * Creates an Exemplar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Exemplar
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.metrics.v1.Exemplar;

                    /**
                     * Creates a plain object from an Exemplar message. Also converts values to other types if specified.
                     * @param message Exemplar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.metrics.v1.Exemplar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Exemplar to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Exemplar
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Exemplar {

                    /** Properties of an Exemplar. */
                    interface $Properties {

                        /** Exemplar filteredAttributes */
                        filteredAttributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** Exemplar timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** Exemplar asDouble */
                        asDouble?: (number|null);

                        /** Exemplar asInt */
                        asInt?: (number|Long|null);

                        /** Exemplar spanId */
                        spanId?: (Uint8Array|null);

                        /** Exemplar traceId */
                        traceId?: (Uint8Array|null);

                        /** Exemplar value */
                        value?: ("asDouble"|"asInt");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of an Exemplar. */
                    type $Shape = {
                      filteredAttributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      timeUnixNano?: number|Long|null;
                      asDouble?: number|null;
                      asInt?: number|Long|null;
                      spanId?: Uint8Array|null;
                      traceId?: Uint8Array|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ value?: undefined; asDouble?: null; asInt?: null }|{ value?: "asDouble"; asDouble: number; asInt?: null }|{ value?: "asInt"; asDouble?: null; asInt: number|Long })
                    );
                }
            }
        }

        /** Namespace logs. */
        namespace logs {

            /** Namespace v1. */
            namespace v1 {

                /**
                 * Properties of a LogsData.
                 * @deprecated Use opentelemetry.proto.logs.v1.LogsData.$Properties instead.
                 */
                interface ILogsData extends opentelemetry.proto.logs.v1.LogsData.$Properties {
                }

                /** Represents a LogsData. */
                class LogsData {

                    /**
                     * Constructs a new LogsData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.LogsData.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** LogsData resourceLogs. */
                    resourceLogs: opentelemetry.proto.logs.v1.ResourceLogs.$Properties[];

                    /**
                     * Encodes the specified LogsData message. Does not implicitly {@link opentelemetry.proto.logs.v1.LogsData.verify|verify} messages.
                     * @param message LogsData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.logs.v1.LogsData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogsData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.LogsData & opentelemetry.proto.logs.v1.LogsData.$Shape} LogsData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.LogsData & opentelemetry.proto.logs.v1.LogsData.$Shape;

                    /**
                     * Creates a LogsData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogsData
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.LogsData;

                    /**
                     * Creates a plain object from a LogsData message. Also converts values to other types if specified.
                     * @param message LogsData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.logs.v1.LogsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogsData to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for LogsData
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace LogsData {

                    /** Properties of a LogsData. */
                    interface $Properties {

                        /** LogsData resourceLogs */
                        resourceLogs?: (opentelemetry.proto.logs.v1.ResourceLogs.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a LogsData. */
                    type $Shape = {
                      resourceLogs?: opentelemetry.proto.logs.v1.ResourceLogs.$Shape[]|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a ResourceLogs.
                 * @deprecated Use opentelemetry.proto.logs.v1.ResourceLogs.$Properties instead.
                 */
                interface IResourceLogs extends opentelemetry.proto.logs.v1.ResourceLogs.$Properties {
                }

                /** Represents a ResourceLogs. */
                class ResourceLogs {

                    /**
                     * Constructs a new ResourceLogs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.ResourceLogs.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ResourceLogs resource. */
                    resource?: (opentelemetry.proto.resource.v1.Resource.$Properties|null);

                    /** ResourceLogs scopeLogs. */
                    scopeLogs: opentelemetry.proto.logs.v1.ScopeLogs.$Properties[];

                    /** ResourceLogs schemaUrl. */
                    schemaUrl: string;

                    /**
                     * Encodes the specified ResourceLogs message. Does not implicitly {@link opentelemetry.proto.logs.v1.ResourceLogs.verify|verify} messages.
                     * @param message ResourceLogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.logs.v1.ResourceLogs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceLogs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.ResourceLogs & opentelemetry.proto.logs.v1.ResourceLogs.$Shape} ResourceLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.ResourceLogs & opentelemetry.proto.logs.v1.ResourceLogs.$Shape;

                    /**
                     * Creates a ResourceLogs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceLogs
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.ResourceLogs;

                    /**
                     * Creates a plain object from a ResourceLogs message. Also converts values to other types if specified.
                     * @param message ResourceLogs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.logs.v1.ResourceLogs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceLogs to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ResourceLogs
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ResourceLogs {

                    /** Properties of a ResourceLogs. */
                    interface $Properties {

                        /** ResourceLogs resource */
                        resource?: (opentelemetry.proto.resource.v1.Resource.$Properties|null);

                        /** ResourceLogs scopeLogs */
                        scopeLogs?: (opentelemetry.proto.logs.v1.ScopeLogs.$Properties[]|null);

                        /** ResourceLogs schemaUrl */
                        schemaUrl?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ResourceLogs. */
                    type $Shape = {
                      resource?: opentelemetry.proto.resource.v1.Resource.$Shape|null;
                      scopeLogs?: opentelemetry.proto.logs.v1.ScopeLogs.$Shape[]|null;
                      schemaUrl?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /**
                 * Properties of a ScopeLogs.
                 * @deprecated Use opentelemetry.proto.logs.v1.ScopeLogs.$Properties instead.
                 */
                interface IScopeLogs extends opentelemetry.proto.logs.v1.ScopeLogs.$Properties {
                }

                /** Represents a ScopeLogs. */
                class ScopeLogs {

                    /**
                     * Constructs a new ScopeLogs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.ScopeLogs.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ScopeLogs scope. */
                    scope?: (opentelemetry.proto.common.v1.InstrumentationScope.$Properties|null);

                    /** ScopeLogs logRecords. */
                    logRecords: opentelemetry.proto.logs.v1.LogRecord.$Properties[];

                    /** ScopeLogs schemaUrl. */
                    schemaUrl: string;

                    /**
                     * Encodes the specified ScopeLogs message. Does not implicitly {@link opentelemetry.proto.logs.v1.ScopeLogs.verify|verify} messages.
                     * @param message ScopeLogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.logs.v1.ScopeLogs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeLogs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.ScopeLogs & opentelemetry.proto.logs.v1.ScopeLogs.$Shape} ScopeLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.ScopeLogs & opentelemetry.proto.logs.v1.ScopeLogs.$Shape;

                    /**
                     * Creates a ScopeLogs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeLogs
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.ScopeLogs;

                    /**
                     * Creates a plain object from a ScopeLogs message. Also converts values to other types if specified.
                     * @param message ScopeLogs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.logs.v1.ScopeLogs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeLogs to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ScopeLogs
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ScopeLogs {

                    /** Properties of a ScopeLogs. */
                    interface $Properties {

                        /** ScopeLogs scope */
                        scope?: (opentelemetry.proto.common.v1.InstrumentationScope.$Properties|null);

                        /** ScopeLogs logRecords */
                        logRecords?: (opentelemetry.proto.logs.v1.LogRecord.$Properties[]|null);

                        /** ScopeLogs schemaUrl */
                        schemaUrl?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ScopeLogs. */
                    type $Shape = {
                      scope?: opentelemetry.proto.common.v1.InstrumentationScope.$Shape|null;
                      logRecords?: opentelemetry.proto.logs.v1.LogRecord.$Shape[]|null;
                      schemaUrl?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }

                /** SeverityNumber enum. */
                enum SeverityNumber {

                    /** SEVERITY_NUMBER_UNSPECIFIED value */
                    SEVERITY_NUMBER_UNSPECIFIED = 0,

                    /** SEVERITY_NUMBER_TRACE value */
                    SEVERITY_NUMBER_TRACE = 1,

                    /** SEVERITY_NUMBER_TRACE2 value */
                    SEVERITY_NUMBER_TRACE2 = 2,

                    /** SEVERITY_NUMBER_TRACE3 value */
                    SEVERITY_NUMBER_TRACE3 = 3,

                    /** SEVERITY_NUMBER_TRACE4 value */
                    SEVERITY_NUMBER_TRACE4 = 4,

                    /** SEVERITY_NUMBER_DEBUG value */
                    SEVERITY_NUMBER_DEBUG = 5,

                    /** SEVERITY_NUMBER_DEBUG2 value */
                    SEVERITY_NUMBER_DEBUG2 = 6,

                    /** SEVERITY_NUMBER_DEBUG3 value */
                    SEVERITY_NUMBER_DEBUG3 = 7,

                    /** SEVERITY_NUMBER_DEBUG4 value */
                    SEVERITY_NUMBER_DEBUG4 = 8,

                    /** SEVERITY_NUMBER_INFO value */
                    SEVERITY_NUMBER_INFO = 9,

                    /** SEVERITY_NUMBER_INFO2 value */
                    SEVERITY_NUMBER_INFO2 = 10,

                    /** SEVERITY_NUMBER_INFO3 value */
                    SEVERITY_NUMBER_INFO3 = 11,

                    /** SEVERITY_NUMBER_INFO4 value */
                    SEVERITY_NUMBER_INFO4 = 12,

                    /** SEVERITY_NUMBER_WARN value */
                    SEVERITY_NUMBER_WARN = 13,

                    /** SEVERITY_NUMBER_WARN2 value */
                    SEVERITY_NUMBER_WARN2 = 14,

                    /** SEVERITY_NUMBER_WARN3 value */
                    SEVERITY_NUMBER_WARN3 = 15,

                    /** SEVERITY_NUMBER_WARN4 value */
                    SEVERITY_NUMBER_WARN4 = 16,

                    /** SEVERITY_NUMBER_ERROR value */
                    SEVERITY_NUMBER_ERROR = 17,

                    /** SEVERITY_NUMBER_ERROR2 value */
                    SEVERITY_NUMBER_ERROR2 = 18,

                    /** SEVERITY_NUMBER_ERROR3 value */
                    SEVERITY_NUMBER_ERROR3 = 19,

                    /** SEVERITY_NUMBER_ERROR4 value */
                    SEVERITY_NUMBER_ERROR4 = 20,

                    /** SEVERITY_NUMBER_FATAL value */
                    SEVERITY_NUMBER_FATAL = 21,

                    /** SEVERITY_NUMBER_FATAL2 value */
                    SEVERITY_NUMBER_FATAL2 = 22,

                    /** SEVERITY_NUMBER_FATAL3 value */
                    SEVERITY_NUMBER_FATAL3 = 23,

                    /** SEVERITY_NUMBER_FATAL4 value */
                    SEVERITY_NUMBER_FATAL4 = 24
                }

                /** LogRecordFlags enum. */
                enum LogRecordFlags {

                    /** LOG_RECORD_FLAGS_DO_NOT_USE value */
                    LOG_RECORD_FLAGS_DO_NOT_USE = 0,

                    /** LOG_RECORD_FLAGS_TRACE_FLAGS_MASK value */
                    LOG_RECORD_FLAGS_TRACE_FLAGS_MASK = 255
                }

                /**
                 * Properties of a LogRecord.
                 * @deprecated Use opentelemetry.proto.logs.v1.LogRecord.$Properties instead.
                 */
                interface ILogRecord extends opentelemetry.proto.logs.v1.LogRecord.$Properties {
                }

                /** Represents a LogRecord. */
                class LogRecord {

                    /**
                     * Constructs a new LogRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.LogRecord.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** LogRecord timeUnixNano. */
                    timeUnixNano: (number|Long);

                    /** LogRecord observedTimeUnixNano. */
                    observedTimeUnixNano: (number|Long);

                    /** LogRecord severityNumber. */
                    severityNumber: opentelemetry.proto.logs.v1.SeverityNumber;

                    /** LogRecord severityText. */
                    severityText: string;

                    /** LogRecord body. */
                    body?: (opentelemetry.proto.common.v1.AnyValue.$Properties|null);

                    /** LogRecord attributes. */
                    attributes: opentelemetry.proto.common.v1.KeyValue.$Properties[];

                    /** LogRecord droppedAttributesCount. */
                    droppedAttributesCount: number;

                    /** LogRecord flags. */
                    flags: number;

                    /** LogRecord traceId. */
                    traceId: Uint8Array;

                    /** LogRecord spanId. */
                    spanId: Uint8Array;

                    /** LogRecord eventName. */
                    eventName: string;

                    /**
                     * Encodes the specified LogRecord message. Does not implicitly {@link opentelemetry.proto.logs.v1.LogRecord.verify|verify} messages.
                     * @param message LogRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: opentelemetry.proto.logs.v1.LogRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.LogRecord & opentelemetry.proto.logs.v1.LogRecord.$Shape} LogRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.LogRecord & opentelemetry.proto.logs.v1.LogRecord.$Shape;

                    /**
                     * Creates a LogRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogRecord
                     */
                    static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.LogRecord;

                    /**
                     * Creates a plain object from a LogRecord message. Also converts values to other types if specified.
                     * @param message LogRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: opentelemetry.proto.logs.v1.LogRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogRecord to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for LogRecord
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace LogRecord {

                    /** Properties of a LogRecord. */
                    interface $Properties {

                        /** LogRecord timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** LogRecord observedTimeUnixNano */
                        observedTimeUnixNano?: (number|Long|null);

                        /** LogRecord severityNumber */
                        severityNumber?: (opentelemetry.proto.logs.v1.SeverityNumber|null);

                        /** LogRecord severityText */
                        severityText?: (string|null);

                        /** LogRecord body */
                        body?: (opentelemetry.proto.common.v1.AnyValue.$Properties|null);

                        /** LogRecord attributes */
                        attributes?: (opentelemetry.proto.common.v1.KeyValue.$Properties[]|null);

                        /** LogRecord droppedAttributesCount */
                        droppedAttributesCount?: (number|null);

                        /** LogRecord flags */
                        flags?: (number|null);

                        /** LogRecord traceId */
                        traceId?: (Uint8Array|null);

                        /** LogRecord spanId */
                        spanId?: (Uint8Array|null);

                        /** LogRecord eventName */
                        eventName?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a LogRecord. */
                    type $Shape = {
                      timeUnixNano?: number|Long|null;
                      observedTimeUnixNano?: number|Long|null;
                      severityNumber?: opentelemetry.proto.logs.v1.SeverityNumber|null;
                      severityText?: string|null;
                      body?: opentelemetry.proto.common.v1.AnyValue.$Shape|null;
                      attributes?: opentelemetry.proto.common.v1.KeyValue.$Shape[]|null;
                      droppedAttributesCount?: number|null;
                      flags?: number|null;
                      traceId?: Uint8Array|null;
                      spanId?: Uint8Array|null;
                      eventName?: string|null;
                      $unknowns?: Uint8Array[];
                    };
                }
            }
        }
    }
}
