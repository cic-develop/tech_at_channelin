/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export const protobufPackage = "channelin.channelin";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQuerySayHelloRequest() {
    return { name: "" };
}
export const QuerySayHelloRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return QuerySayHelloRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySayHelloRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQuerySayHelloResponse() {
    return { name: "" };
}
export const QuerySayHelloResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return QuerySayHelloResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySayHelloResponse();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQueryMathRequest() {
    return { name: "" };
}
export const QueryMathRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return QueryMathRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryMathRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQueryMathResponse() {
    return { number: "" };
}
export const QueryMathResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.number !== "") {
            writer.uint32(10).string(message.number);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { number: isSet(object.number) ? String(object.number) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== "") {
            obj.number = message.number;
        }
        return obj;
    },
    create(base) {
        return QueryMathResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryMathResponse();
        message.number = object.number ?? "";
        return message;
    },
};
function createBaseQueryPlusRequest() {
    return { number: "" };
}
export const QueryPlusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.number !== "") {
            writer.uint32(10).string(message.number);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { number: isSet(object.number) ? String(object.number) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== "") {
            obj.number = message.number;
        }
        return obj;
    },
    create(base) {
        return QueryPlusRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPlusRequest();
        message.number = object.number ?? "";
        return message;
    },
};
function createBaseQueryPlusResponse() {
    return { number: "" };
}
export const QueryPlusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.number !== "") {
            writer.uint32(10).string(message.number);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { number: isSet(object.number) ? String(object.number) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== "") {
            obj.number = message.number;
        }
        return obj;
    },
    create(base) {
        return QueryPlusResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPlusResponse();
        message.number = object.number ?? "";
        return message;
    },
};
export const QueryServiceName = "channelin.channelin.Query";
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.SayHello = this.SayHello.bind(this);
        this.Math = this.Math.bind(this);
        this.Plus = this.Plus.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }
    SayHello(request) {
        const data = QuerySayHelloRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SayHello", data);
        return promise.then((data) => QuerySayHelloResponse.decode(_m0.Reader.create(data)));
    }
    Math(request) {
        const data = QueryMathRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Math", data);
        return promise.then((data) => QueryMathResponse.decode(_m0.Reader.create(data)));
    }
    Plus(request) {
        const data = QueryPlusRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Plus", data);
        return promise.then((data) => QueryPlusResponse.decode(_m0.Reader.create(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
