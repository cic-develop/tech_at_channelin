import { QueryParamsResponse } from "./types/chin/chin/query";
import { MsgUpdateParams } from "./types/chin/chin/tx";
import { Params } from "./types/chin/chin/params";
import { QueryParamsRequest } from "./types/chin/chin/query";
import { GenesisState } from "./types/chin/chin/genesis";
import { MsgUpdateParamsResponse } from "./types/chin/chin/tx";
const msgTypes = [
    ["/chin.chin.QueryParamsResponse", QueryParamsResponse],
    ["/chin.chin.MsgUpdateParams", MsgUpdateParams],
    ["/chin.chin.Params", Params],
    ["/chin.chin.QueryParamsRequest", QueryParamsRequest],
    ["/chin.chin.GenesisState", GenesisState],
    ["/chin.chin.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
];
export { msgTypes };
