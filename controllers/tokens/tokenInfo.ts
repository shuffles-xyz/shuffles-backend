import { Request, Response } from 'express';

export async function getTokenInfo(req:Request, res:Response) {
    const tokenAddress = req.params.tokenAddress;
   try {
    const response = await fetch(`https://api.shyft.to/sol/v1/token/get_info?network=mainnet-beta&token_address=${tokenAddress}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SHYFT_API_KEY as string
        }
    });

    const data = await response.json();
    return res.status(200).json(data);
   } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal Server Error"});
   }
}