// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
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
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendQueryMathResponseParams = {
  value: QueryMathResponse,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQuerySayHelloRequestParams = {
  value: QuerySayHelloRequest,
  fee?: StdFee,
  memo?: string
};

type sendQuerySayHelloResponseParams = {
  value: QuerySayHelloResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryPlusRequestParams = {
  value: QueryPlusRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryMathRequestParams = {
  value: QueryMathRequest,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendQueryPlusResponseParams = {
  value: QueryPlusResponse,
  fee?: StdFee,
  memo?: string
};


type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type queryMathResponseParams = {
  value: QueryMathResponse,
};

type paramsParams = {
  value: Params,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type querySayHelloRequestParams = {
  value: QuerySayHelloRequest,
};

type querySayHelloResponseParams = {
  value: QuerySayHelloResponse,
};

type queryPlusRequestParams = {
  value: QueryPlusRequest,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type queryMathRequestParams = {
  value: QueryMathRequest,
};

type genesisStateParams = {
  value: GenesisState,
};

type queryPlusResponseParams = {
  value: QueryPlusResponse,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryMathResponse({ value, fee, memo }: sendQueryMathResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryMathResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryMathResponse({ value: QueryMathResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryMathResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQuerySayHelloRequest({ value, fee, memo }: sendQuerySayHelloRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQuerySayHelloRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.querySayHelloRequest({ value: QuerySayHelloRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQuerySayHelloRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQuerySayHelloResponse({ value, fee, memo }: sendQuerySayHelloResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQuerySayHelloResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.querySayHelloResponse({ value: QuerySayHelloResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQuerySayHelloResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryPlusRequest({ value, fee, memo }: sendQueryPlusRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryPlusRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryPlusRequest({ value: QueryPlusRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryPlusRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryMathRequest({ value, fee, memo }: sendQueryMathRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryMathRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryMathRequest({ value: QueryMathRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryMathRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryPlusResponse({ value, fee, memo }: sendQueryPlusResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryPlusResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryPlusResponse({ value: QueryPlusResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryPlusResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		queryMathResponse({ value }: queryMathResponseParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QueryMathResponse", value: QueryMathResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryMathResponse: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		querySayHelloRequest({ value }: querySayHelloRequestParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QuerySayHelloRequest", value: QuerySayHelloRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QuerySayHelloRequest: Could not create message: ' + e.message)
			}
		},
		
		querySayHelloResponse({ value }: querySayHelloResponseParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QuerySayHelloResponse", value: QuerySayHelloResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QuerySayHelloResponse: Could not create message: ' + e.message)
			}
		},
		
		queryPlusRequest({ value }: queryPlusRequestParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QueryPlusRequest", value: QueryPlusRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryPlusRequest: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryMathRequest({ value }: queryMathRequestParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QueryMathRequest", value: QueryMathRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryMathRequest: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		queryPlusResponse({ value }: queryPlusResponseParams): EncodeObject {
			try {
				return { typeUrl: "/channelin.channelin.QueryPlusResponse", value: QueryPlusResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryPlusResponse: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			ChannelinChannelin: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;