import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { PeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { ContinuousVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePermanentLockedAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { PermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { BaseVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { DelayedVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { Period } from "./types/cosmos/vesting/v1beta1/vesting";
export { PeriodicVestingAccount, MsgCreatePeriodicVestingAccount, ContinuousVestingAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccountResponse, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, PermanentLockedAccount, MsgCreateVestingAccount, BaseVestingAccount, DelayedVestingAccount, Period };
type sendPeriodicVestingAccountParams = {
    value: PeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendContinuousVestingAccountParams = {
    value: ContinuousVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPermanentLockedAccountParams = {
    value: PermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendBaseVestingAccountParams = {
    value: BaseVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendDelayedVestingAccountParams = {
    value: DelayedVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodParams = {
    value: Period;
    fee?: StdFee;
    memo?: string;
};
type periodicVestingAccountParams = {
    value: PeriodicVestingAccount;
};
type msgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
};
type continuousVestingAccountParams = {
    value: ContinuousVestingAccount;
};
type msgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
};
type msgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
};
type msgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
};
type msgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
};
type permanentLockedAccountParams = {
    value: PermanentLockedAccount;
};
type msgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
};
type baseVestingAccountParams = {
    value: BaseVestingAccount;
};
type delayedVestingAccountParams = {
    value: DelayedVestingAccount;
};
type periodParams = {
    value: Period;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendPeriodicVestingAccount({ value, fee, memo }: sendPeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccount({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendContinuousVestingAccount({ value, fee, memo }: sendContinuousVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccountResponse({ value, fee, memo }: sendMsgCreatePermanentLockedAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccountResponse({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccountResponse({ value, fee, memo }: sendMsgCreateVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccount({ value, fee, memo }: sendMsgCreatePermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendPermanentLockedAccount({ value, fee, memo }: sendPermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccount({ value, fee, memo }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse>;
    sendBaseVestingAccount({ value, fee, memo }: sendBaseVestingAccountParams): Promise<DeliverTxResponse>;
    sendDelayedVestingAccount({ value, fee, memo }: sendDelayedVestingAccountParams): Promise<DeliverTxResponse>;
    sendPeriod({ value, fee, memo }: sendPeriodParams): Promise<DeliverTxResponse>;
    periodicVestingAccount({ value }: periodicVestingAccountParams): EncodeObject;
    msgCreatePeriodicVestingAccount({ value }: msgCreatePeriodicVestingAccountParams): EncodeObject;
    continuousVestingAccount({ value }: continuousVestingAccountParams): EncodeObject;
    msgCreatePermanentLockedAccountResponse({ value }: msgCreatePermanentLockedAccountResponseParams): EncodeObject;
    msgCreatePeriodicVestingAccountResponse({ value }: msgCreatePeriodicVestingAccountResponseParams): EncodeObject;
    msgCreateVestingAccountResponse({ value }: msgCreateVestingAccountResponseParams): EncodeObject;
    msgCreatePermanentLockedAccount({ value }: msgCreatePermanentLockedAccountParams): EncodeObject;
    permanentLockedAccount({ value }: permanentLockedAccountParams): EncodeObject;
    msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): EncodeObject;
    baseVestingAccount({ value }: baseVestingAccountParams): EncodeObject;
    delayedVestingAccount({ value }: delayedVestingAccountParams): EncodeObject;
    period({ value }: periodParams): EncodeObject;
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
        CosmosVestingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
