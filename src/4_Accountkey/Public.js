// AccountKeyPublic
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// index2.js

// 필요한 라이브러리 및 모듈 가져오기
const { Wallet, TxType, AccountKeyType, parseKlay } = require("@klaytn/ethers-ext");
const { ethers } = require("ethers");


// 보내는 사람 지갑 주소 , 개인키 , 받는사람 지갑주소
const senderAddr = "senderAddr";
const senderPriv = "senderPriv";
const senderNewPriv = "senderNewPriv";
const recieverAddr = "recieverAddr";

// 프로바이더 설정 어떤 네트워크에서 서비스를 제공해줄것인지
const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");


// 지갑을 생성 
const wallet = new Wallet(senderAddr, senderPriv, provider);


// Lagacy 방식에서 -> Public 방식으로 업그레이드 됐을때 생성되는 지갑
const newWallet = new Wallet(senderAddr, senderNewPriv, provider);



// 지갑 주소를 Lagacy 방식에서 -> Public 방식으로 업그레이드 하는 함수 
async function updateAccount() {

// 새로운 개인키를 사용하여 공개키를 생성한다.
  let senderNewPub = ethers.utils.computePublicKey(senderNewPriv, true);


// 새로운 공개키를 이용하여 키 타입을 퍼블릭으로 바꿔줌
  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    }
  };


// 기존 Legacy 였던 지갑에 Public으로 바꾸는 트랜잭션
  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

// 트랜잭션의 결과값을 받아볼 수 있음
  const receipt = await sentTx.wait();
  console.log("receipt", receipt);

}



async function main() {
  await updateAccount();
 // await sendTx();
  
main().catch(console.error);
