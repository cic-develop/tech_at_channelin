// import Caver from "caver-js";
import { caver, TECH_TOKEN_ABI, TECH_TOKEN_ADDRESS } from "../constants.js";

// const caver = new Caver(EN_NODE);

const mintToken = async (to, amount) => {
  // generate keyring instance
  const caller = caver.wallet.keyring.generate();
  caver.wallet.add(caller);
  // write fee payer's private key
  const feePayer = caver.wallet.newKeyring("0x{private key}");
  caver.wallet.add(feePayer);

  const techTokenInstance = caver.contract.create(
    TECH_TOKEN_ABI,
    TECH_TOKEN_ADDRESS
  );

  const receipt = await techTokenInstance.send(
    {
      from: caller.address,
      gas: "1000000",
      feeDelegation: true,
      feePayer: feePayer.address,
      value: 0,
    },
    "mint",
    to,
    amount
  );
  console.log(receipt);
};

//
//
// input your address and amount
mintToken("0x Address ", "mint amount");
