import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const withdrawSchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
        receiver: z.string({
            required_error: "receiver address is required",
        }),
        token: z.object({
        }).required(),
        amount: z.number({
            required_error: "amount is required",
        }),
        tx_hash: z.string({
            required_error: "txHash is required",
        }),
    }),
});

export default async function validateWithdrawal(req: Request, res: Response, next: NextFunction) {
    try {
        await withdrawSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}