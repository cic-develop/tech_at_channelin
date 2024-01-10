// 필요한 라이브러리 및 모듈 가져오기
const { ethers } = require("ethers");
const { Wallet,JsonRpcProvider} = require("@klaytn/ethers-ext");

// // 보내는 자, 보내는 자의 개인키 , 받는자 주소 
const senderAddr = "Your Address";
const senderPriv = "Your Private Address";
const recieverAddr = "Receiver Address";



// // Klaytn 노드 프로바이더 
const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

// 지갑 생성 
const wallet = new Wallet(senderPriv, provider);



// 트랜잭션 전송 
async function sendTx() {


// 누가 누구한테 얼마를 보내는 설정
  const tx = {
    from: senderAddr,
    to: recieverAddr,
    value: 0,
  };

// 트랜잭션을 지갑에 요청하고 그 결과를 담음

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

// 트랜잭션 결과를 기다림 
  const receipt = await sentTx.wait();
  console.log("receipt", receipt);

}

// 메인 함수 실행
async function main() {
  await sendTx();
}
main().catch(console.error);
