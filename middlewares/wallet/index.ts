import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const getTokenBalanceSchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
    }),
});

export default async function validateGetTokenBalance(req: Request, res: Response, next: NextFunction) {
    try {
        await getTokenBalanceSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}