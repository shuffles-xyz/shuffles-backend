import fs from 'fs';
import path from 'path';
import { Request, Response } from "express";

export async function getTokenList(req: Request, res: Response) {
    const chainId = req.params.chainId;
    try {
        const response = await fetch(`https://api.dln.trade/v1.0/token-list?chainId=${chainId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
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
        
        const fileName = `${chainId}.json`;
        const filePath = path.join(__dirname, '../../data', fileName);
        fs.writeFileSync(filePath, JSON.stringify(tokenList, null, 2));
        
        return res.status(200).json(tokenList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
