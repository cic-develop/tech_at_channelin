import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channelin.channelin.MsgUpdateParams", MsgUpdateParams],
    ["/channelin.channelin.QueryMathResponse", QueryMathResponse],
    ["/channelin.channelin.Params", Params],
    ["/channelin.channelin.QueryParamsRequest", QueryParamsRequest],
    ["/channelin.channelin.QueryParamsResponse", QueryParamsResponse],
    ["/channelin.channelin.QuerySayHelloRequest", QuerySayHelloRequest],
    ["/channelin.channelin.QuerySayHelloResponse", QuerySayHelloResponse],
    ["/channelin.channelin.QueryPlusRequest", QueryPlusRequest],
    ["/channelin.channelin.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/channelin.channelin.QueryMathRequest", QueryMathRequest],
    ["/channelin.channelin.GenesisState", GenesisState],
    ["/channelin.channelin.QueryPlusResponse", QueryPlusResponse],
    
];

export { msgTypes }