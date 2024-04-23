import { Request, Response } from "express";
import prisma from "../../lib/prims-client";

async function createLimitOrder(req: Request, res: Response) {
    const {
        address,
        input_token,
        output_token,
        in_amount,
        out_amount,
        buy_rate,
        tx_hash,
        expiry, } = req.body;
    try {
        const bridge = await prisma.limit.create({
            data: {
                address,
                input_token,
                output_token,
                in_amount,
                out_amount,
                buy_rate,
                tx_hash,
                expiry,
            },
        });
        res.status(200).json(bridge);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

async function getLimitOrder(req: Request, res: Response) {
    const { tx } = req.params;
    try {
        const bridge = await prisma.limit.findUnique({
            where: {
                tx_hash: tx,
            },
        });
        res.status(200).json(bridge);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

async function getAllLimitOrders(req: Request, res: Response) {
    const { address } = req.params;
    try {
        const bridge = await prisma.limit.findMany({
            where: {
                address,
            },
        });
        res.status(200).json(bridge);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export { createLimitOrder, getLimitOrder, getAllLimitOrders };