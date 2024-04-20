import { IToken } from "../../types/wallet/wallet";
import { Request, Response } from "express";
import { getWalletBalance } from "../../utils/getWalletBalance";

export async function getTokenBalance(req:Request, res:Response) {
    const address = req.params.address;

    let tokens: IToken[] = [];
    const tokenResponse = await fetch(`https://api.shyft.to/sol/v1/wallet/all_tokens?network=mainnet-beta&wallet=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SHYFT_API_KEY as string
        }
    });

   try {
    const data = await tokenResponse.json();
    const solTokenAddress = 'So11111111111111111111111111111111111111112';

    for (let i = 0; i < data.result.length; i++) {
        const token = data.result[i];
        if (token.balance > 0.01) {
            const balanceResponse = await fetch(`https://public-api.birdeye.so/defi/price?address=${token.address}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': process.env.BIRDEYE_API_KEY as string
                }
            });

            const balanceData = await balanceResponse.json();

            if (balanceData.data != null) {
                tokens.push({
                    address: token.address,
                    price: (balanceData.data.value * token.balance).toFixed(2),
                    name: token.info.name,
                    symbol: token.info.symbol,
                    image: token.info.image,
                    decimal: token.info.decimals,
                    balance: token.balance.toFixed(2),
                });
            }
        }
    }

    const sol = tokens.find((el) => el.address === solTokenAddress)

    if (!sol) {
        const data = await getWalletBalance(address)
        tokens.push({
            address: solTokenAddress,
            decimal: 9,
            price: (data.price).toFixed(2),
            name: "Solana",
            symbol: "SOL",
            image: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/solana.svg",
            balance: data.balance.toFixed(2),
        })
    }

    tokens.sort((a, b) => Number(b.price) - Number(a.price));

    return res.status(200).json({ data: tokens });
   } catch (error) {
    console.log(error)
    return res.status(400).json({ error: 'Error fetching data' });
   }
}

