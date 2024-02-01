import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "channelin.channelin";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QuerySayHelloRequest {
    name: string;
}
export interface QuerySayHelloResponse {
    name: string;
}
export interface QueryMathRequest {
    name: string;
}
export interface QueryMathResponse {
    number: string;
}
export interface QueryPlusRequest {
    number: string;
}
export interface QueryPlusResponse {
    number: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QuerySayHelloRequest: {
    encode(message: QuerySayHelloRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySayHelloRequest;
    fromJSON(object: any): QuerySayHelloRequest;
    toJSON(message: QuerySayHelloRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): QuerySayHelloRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): QuerySayHelloRequest;
};
export declare const QuerySayHelloResponse: {
    encode(message: QuerySayHelloResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySayHelloResponse;
    fromJSON(object: any): QuerySayHelloResponse;
    toJSON(message: QuerySayHelloResponse): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): QuerySayHelloResponse;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): QuerySayHelloResponse;
};
export declare const QueryMathRequest: {
    encode(message: QueryMathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMathRequest;
    fromJSON(object: any): QueryMathRequest;
    toJSON(message: QueryMathRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): QueryMathRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): QueryMathRequest;
};
export declare const QueryMathResponse: {
    encode(message: QueryMathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMathResponse;
    fromJSON(object: any): QueryMathResponse;
    toJSON(message: QueryMathResponse): unknown;
    create<I extends {
        number?: string;
    } & {
        number?: string;
    } & { [K in Exclude<keyof I, "number">]: never; }>(base?: I): QueryMathResponse;
    fromPartial<I_1 extends {
        number?: string;
    } & {
        number?: string;
    } & { [K_1 in Exclude<keyof I_1, "number">]: never; }>(object: I_1): QueryMathResponse;
};
export declare const QueryPlusRequest: {
    encode(message: QueryPlusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlusRequest;
    fromJSON(object: any): QueryPlusRequest;
    toJSON(message: QueryPlusRequest): unknown;
    create<I extends {
        number?: string;
    } & {
        number?: string;
    } & { [K in Exclude<keyof I, "number">]: never; }>(base?: I): QueryPlusRequest;
    fromPartial<I_1 extends {
        number?: string;
    } & {
        number?: string;
    } & { [K_1 in Exclude<keyof I_1, "number">]: never; }>(object: I_1): QueryPlusRequest;
};
export declare const QueryPlusResponse: {
    encode(message: QueryPlusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlusResponse;
    fromJSON(object: any): QueryPlusResponse;
    toJSON(message: QueryPlusResponse): unknown;
    create<I extends {
        number?: string;
    } & {
        number?: string;
    } & { [K in Exclude<keyof I, "number">]: never; }>(base?: I): QueryPlusResponse;
    fromPartial<I_1 extends {
        number?: string;
    } & {
        number?: string;
    } & { [K_1 in Exclude<keyof I_1, "number">]: never; }>(object: I_1): QueryPlusResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of SayHello items. */
    SayHello(request: QuerySayHelloRequest): Promise<QuerySayHelloResponse>;
    /** Queries a list of Math items. */
    Math(request: QueryMathRequest): Promise<QueryMathResponse>;
    /** Queries a list of Plus items. */
    Plus(request: QueryPlusRequest): Promise<QueryPlusResponse>;
}
export declare const QueryServiceName = "channelin.channelin.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    SayHello(request: QuerySayHelloRequest): Promise<QuerySayHelloResponse>;
    Math(request: QueryMathRequest): Promise<QueryMathResponse>;
    Plus(request: QueryPlusRequest): Promise<QueryPlusResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
