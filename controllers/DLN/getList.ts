import fs from 'fs';
import path from 'path';
import { Request, Response } from "express";

export async function getList(req: Request, res: Response) {
    const chainId = req.params.chainId;
    try {
        const fileName = `${chainId}.json`;
        const filePath = path.join(__dirname, '../../data', fileName);
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: "File not found" });
        }
        
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const tokenList = JSON.parse(fileData);
        
        return res.status(200).json(tokenList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
