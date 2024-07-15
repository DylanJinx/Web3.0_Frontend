import { http, createPublicClient } from 'viem'
import {mainnet } from 'viem/chains'

const client = createPublicClient({
    chain: mainnet,
    transport: http(`https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`),
    //transport: http()
})

async function getBlockNumber() {
    const blockNumber = await client.getBlockNumber();
    return [`Block number: ${blockNumber}`];
}

export default getBlockNumber();