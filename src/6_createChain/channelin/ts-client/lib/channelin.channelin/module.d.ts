import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParams } from "./types/channelin/channelin/tx";
import { QueryMathResponse } from "./types/channelin/channelin/query";
import { Params } from "./types/channelin/channelin/params";
import { QueryParamsRequest } from "./types/channelin/channelin/query";
import { QueryParamsResponse } from "./types/channelin/channelin/query";
import { QuerySayHelloRequest } from "./types/channelin/channelin/query";
import { QuerySayHelloResponse } from "./types/channelin/channelin/query";
import { QueryPlusRequest } from "./types/channelin/channelin/query";
import { MsgUpdateParamsResponse } from "./types/channelin/channelin/tx";
import { QueryMathRequest } from "./types/channelin/channelin/query";
import { GenesisState } from "./types/channelin/channelin/genesis";
import { QueryPlusResponse } from "./types/channelin/channelin/query";
export { MsgUpdateParams, QueryMathResponse, Params, QueryParamsRequest, QueryParamsResponse, QuerySayHelloRequest, QuerySayHelloResponse, QueryPlusRequest, MsgUpdateParamsResponse, QueryMathRequest, GenesisState, QueryPlusResponse };
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryMathResponseParams = {
    value: QueryMathResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySayHelloRequestParams = {
    value: QuerySayHelloRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySayHelloResponseParams = {
    value: QuerySayHelloResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPlusRequestParams = {
    value: QueryPlusRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryMathRequestParams = {
    value: QueryMathRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPlusResponseParams = {
    value: QueryPlusResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryMathResponseParams = {
    value: QueryMathResponse;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type querySayHelloRequestParams = {
    value: QuerySayHelloRequest;
};
type querySayHelloResponseParams = {
    value: QuerySayHelloResponse;
};
type queryPlusRequestParams = {
    value: QueryPlusRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryMathRequestParams = {
    value: QueryMathRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryPlusResponseParams = {
    value: QueryPlusResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryMathResponse({ value, fee, memo }: sendQueryMathResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySayHelloRequest({ value, fee, memo }: sendQuerySayHelloRequestParams): Promise<DeliverTxResponse>;
    sendQuerySayHelloResponse({ value, fee, memo }: sendQuerySayHelloResponseParams): Promise<DeliverTxResponse>;
    sendQueryPlusRequest({ value, fee, memo }: sendQueryPlusRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryMathRequest({ value, fee, memo }: sendQueryMathRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryPlusResponse({ value, fee, memo }: sendQueryPlusResponseParams): Promise<DeliverTxResponse>;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryMathResponse({ value }: queryMathResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    querySayHelloRequest({ value }: querySayHelloRequestParams): EncodeObject;
    querySayHelloResponse({ value }: querySayHelloResponseParams): EncodeObject;
    queryPlusRequest({ value }: queryPlusRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryMathRequest({ value }: queryMathRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryPlusResponse({ value }: queryPlusResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        ChannelinChannelin: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
