/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "channelin.channelin";

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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQuerySayHelloRequest(): QuerySayHelloRequest {
  return { name: "" };
}

export const QuerySayHelloRequest = {
  encode(message: QuerySayHelloRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySayHelloRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySayHelloRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySayHelloRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QuerySayHelloRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySayHelloRequest>, I>>(base?: I): QuerySayHelloRequest {
    return QuerySayHelloRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySayHelloRequest>, I>>(object: I): QuerySayHelloRequest {
    const message = createBaseQuerySayHelloRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuerySayHelloResponse(): QuerySayHelloResponse {
  return { name: "" };
}

export const QuerySayHelloResponse = {
  encode(message: QuerySayHelloResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySayHelloResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySayHelloResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySayHelloResponse {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QuerySayHelloResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySayHelloResponse>, I>>(base?: I): QuerySayHelloResponse {
    return QuerySayHelloResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySayHelloResponse>, I>>(object: I): QuerySayHelloResponse {
    const message = createBaseQuerySayHelloResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryMathRequest(): QueryMathRequest {
  return { name: "" };
}

export const QueryMathRequest = {
  encode(message: QueryMathRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMathRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMathRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMathRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryMathRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryMathRequest>, I>>(base?: I): QueryMathRequest {
    return QueryMathRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryMathRequest>, I>>(object: I): QueryMathRequest {
    const message = createBaseQueryMathRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryMathResponse(): QueryMathResponse {
  return { number: "" };
}

export const QueryMathResponse = {
  encode(message: QueryMathResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMathResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMathResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.number = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMathResponse {
    return { number: isSet(object.number) ? String(object.number) : "" };
  },

  toJSON(message: QueryMathResponse): unknown {
    const obj: any = {};
    if (message.number !== "") {
      obj.number = message.number;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryMathResponse>, I>>(base?: I): QueryMathResponse {
    return QueryMathResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryMathResponse>, I>>(object: I): QueryMathResponse {
    const message = createBaseQueryMathResponse();
    message.number = object.number ?? "";
    return message;
  },
};

function createBaseQueryPlusRequest(): QueryPlusRequest {
  return { number: "" };
}

export const QueryPlusRequest = {
  encode(message: QueryPlusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.number = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPlusRequest {
    return { number: isSet(object.number) ? String(object.number) : "" };
  },

  toJSON(message: QueryPlusRequest): unknown {
    const obj: any = {};
    if (message.number !== "") {
      obj.number = message.number;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlusRequest>, I>>(base?: I): QueryPlusRequest {
    return QueryPlusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlusRequest>, I>>(object: I): QueryPlusRequest {
    const message = createBaseQueryPlusRequest();
    message.number = object.number ?? "";
    return message;
  },
};

function createBaseQueryPlusResponse(): QueryPlusResponse {
  return { number: "" };
}

export const QueryPlusResponse = {
  encode(message: QueryPlusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.number = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPlusResponse {
    return { number: isSet(object.number) ? String(object.number) : "" };
  },

  toJSON(message: QueryPlusResponse): unknown {
    const obj: any = {};
    if (message.number !== "") {
      obj.number = message.number;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlusResponse>, I>>(base?: I): QueryPlusResponse {
    return QueryPlusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlusResponse>, I>>(object: I): QueryPlusResponse {
    const message = createBaseQueryPlusResponse();
    message.number = object.number ?? "";
    return message;
  },
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

export const QueryServiceName = "channelin.channelin.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SayHello = this.SayHello.bind(this);
    this.Math = this.Math.bind(this);
    this.Plus = this.Plus.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  SayHello(request: QuerySayHelloRequest): Promise<QuerySayHelloResponse> {
    const data = QuerySayHelloRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SayHello", data);
    return promise.then((data) => QuerySayHelloResponse.decode(_m0.Reader.create(data)));
  }

  Math(request: QueryMathRequest): Promise<QueryMathResponse> {
    const data = QueryMathRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Math", data);
    return promise.then((data) => QueryMathResponse.decode(_m0.Reader.create(data)));
  }

  Plus(request: QueryPlusRequest): Promise<QueryPlusResponse> {
    const data = QueryPlusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Plus", data);
    return promise.then((data) => QueryPlusResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
