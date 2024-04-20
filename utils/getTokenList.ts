import fs from 'fs';
import path from 'path';

export async function getTokenList() {
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
    ]
    try {
        console.log('Fetching', chains.length, 'token lists');
        for (let index = 0; index < chains.length; index++) {
            console.log('Fetching token list', chains[index]);
            const response = await fetch(`https://api.dln.trade/v1.0/token-list?chainId=${chains[index]}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            console.log('Token list fetched', chains[index]);
            const tokens = data.tokens;
            let tokenList: any[] = [];
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

            const fileName = `${chains[index]}.json`;
            const filePath = path.join(__dirname, '../data', fileName);
            fs.writeFileSync(filePath, JSON.stringify(tokenList, null, 2));
            console.log('Token list saved', chains[index]);
        }
    } catch (error) {
        console.log(error);
    }
}
