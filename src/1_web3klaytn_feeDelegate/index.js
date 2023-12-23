import ethers from "ethers";
import { Wallet, TxType } from "@klaytn/ethers-ext";
import { TECH_TOKEN_ABI, TECH_TOKEN_ADDRESS, EN_NODE } from "../constants.js";

const provider = new ethers.providers.JsonRpcProvider(EN_NODE);

const mintToken = async (to, amount) => {
  // generate random wallet instance
  const createWallet = new ethers.Wallet.createRandom().connect(provider);

  // ethers/klaytn extension wallet instance
  const caller = new Wallet(createWallet.privateKey, provider);
  // ethers/klaytn extension wallet instance
  const feePayer = new Wallet("0xPrivate key", provider);

  const techTokenInstance = new ethers.Contract(
    TECH_TOKEN_ADDRESS,
    TECH_TOKEN_ABI,
    provider
  );

  const param = techTokenInstance.interface.encodeFunctionData("mint", [
    to,
    amount,
  ]);

  let tx = {
    type: TxType.FeeDelegatedSmartContractExecution,
    from: caller.address,
    to: TECH_TOKEN_ADDRESS,
    value: 0,
    input: param,
    gasLimit: 100000,
  };

  tx = await caller.populateTransaction(tx);

  const senderTxHashRLP = await caller.signTransaction(tx);
  const sentTx = await feePayer.sendTransactionAsFeePayer(senderTxHashRLP);
  const receipt = await sentTx.wait();

  console.log("receipt=====\n", receipt);
};

//
//
// input your address and amount
mintToken("0xYour address", "write amount");
