import ethers from "ethers";
import { Wallet, TxType, AccountKeyType } from "@klaytn/ethers-ext";
import { TECH_TOKEN_ABI, TECH_TOKEN_ADDRESS, provider } from "../constants.js";

const originFeePayer = "0xPrivate key";
const delegateFeePayer = "0xPrivate key";

const originWallet = new Wallet(originFeePayer, provider);
const delegateFeeWallet = new Wallet(
  originWallet.address,
  delegateFeePayer,
  provider
);

const grantRoleUpdate = async () => {
  let pubKey = new ethers.utils.SigningKey(delegateFeePayer)
    .compressedPublicKey;

  let tx = {
    type: TxType.AccountUpdate,
    from: originWallet.address,
    gasLimit: 1000000,
    key: {
      type: AccountKeyType.RoleBased,
      keys: [
        // RoleFeePayer
        {
          type: AccountKeyType.Public,
          key: pubKey,
        },
      ],
    },
  };
  let sentTx = await originWallet.sendTransaction(tx);
  console.log("updateAccount", sentTx);

  let rc = await sentTx.wait();
  console.log("receipt", rc);
};

const sentTx = async (to, amount) => {
  const createWallet = await new ethers.Wallet.createRandom().connect(provider);

  // ethers/klaytn extension wallet instance
  const caller = new Wallet(createWallet.privateKey, provider);

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
  console.log(tx);

  const senderTxHashRLP = await caller.signTransaction(tx);
  console.log("senderTxHashRLP", senderTxHashRLP);

  tx = delegateFeeWallet.decodeTxFromRLP(senderTxHashRLP);
  console.log("tx", tx);

  // backend sign
  const sentTx = await delegateFeeWallet.sendTransactionAsFeePayer(tx);
  console.log("sentTx", sentTx);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
};

async function main() {
  // origin fee payer update
  await grantRoleUpdate();
  // input your address and amount
  await sentTx("0xYour address", "write amount");
}
main().catch(console.error);
