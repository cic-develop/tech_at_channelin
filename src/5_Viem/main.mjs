import TetherABI from "./abi/TetherABI.mjs";
import { createPublicClient,createWalletClient,getContract,http, publicActions } from "viem";
import { mainnet, sepolia } from 'viem/chains'
import {privateKeyToAccount} from 'viem/accounts'
import TestABI from "./abi/TestABI.mjs";

// 블록체인 네트워크와 상호작용을 할 수 있게 도와주는 코드 
const publicClient = createPublicClient({
   chain: mainnet,
   transport: http()
  })

  console.log(' < 지금부터 블록 정보를 가져오겠습니다! >')

  // 해당 체인의 블록 정보를 가져오는 함수
  const getBlockInformation = async () => {
  const block =  await publicClient.getBlock();
  const blockNumber = await publicClient.getBlockNumber();

  console.log('블록 : ',block)
  console.log('블록 숫자 : ',blockNumber)

}

// 컨트랙트의 정보를 얻을 수 있는 코드
const readContract = async () => {
  const contract = getContract({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    abi: TetherABI,
    publicClient, 
  });

  const totalSupply = await contract.read.totalSupply();
  const name = await contract.read.name();
  const symbol = await contract.read.symbol();
  const balance = await contract.read.balanceOf(["your wallet Address"]);

  console.log('총 공급량 : ',totalSupply);
  console.log('토큰 이름 : ',name );
  console.log('토큰 심볼 : ',symbol);
  console.log('토큰 잔액',balance);
}


const writeContract = async () => {
   const account = privateKeyToAccount("your Wallet Private Key");
  

   const walletClient = createWalletClient({
    account,
    chain: sepolia,
    transport: http('https://eth-sepolia.g.alchemy.com/v2/Your API Key')
  }).extend(publicActions)
  
  const { request } = await walletClient.simulateContract({
    // 컨트랙트 주소
    address : "0xdc5a32786E2748C612b7C3CBdc65A272340E7611",
    abi : TestABI,
    functionName : "store",
    args : [100],
    account,
  });


  const hash = await walletClient.writeContract(request);
  console.log('hash?',hash)

}


  writeContract()


  // getBlockInformation()
