import fs from 'fs';
import path from 'path';
import {Token} from '../types/wallet/wallet';


const chains = [
    "42161",
    "43114",
    "56",
    "1",
    "137",
    "7565164",
    "59144",
    "8453",
    "10"
];

export async function getTokenList() {
    try {
        console.log('Fetching', chains.length, 'token lists');

        const promises = chains.map(async chainId => {
            console.log('Fetching token list', chainId);
            const response = await fetch(`https://api.dln.trade/v1.0/token-list?chainId=${chainId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            console.log('Token list fetched', chainId);
            const tokens = data.tokens;
            let tokenList:Token[] = [];
            for (const key in tokens) {
                if (Object.hasOwnProperty.call(tokens, key)) {
                    const token = tokens[key];
                    tokenList.push({
                        address: token.address,
                        name: token.name,
                        symbol: token.symbol,
                        image: token.logoURI,
                        decimals: token.decimals,
                    });
                }
            }

            const fileName = `${chainId}.json`;
            const filePath = path.join(__dirname, '../data', fileName);
            fs.writeFileSync(filePath, JSON.stringify(tokenList, null, 2));
            console.log('Token list saved', chainId);
        });

        await Promise.all(promises);
    } catch (error) {
        console.log(error);
    }
}
