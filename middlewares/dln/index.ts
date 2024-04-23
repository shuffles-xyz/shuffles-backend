import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const getTokenListSchema = z.object({
    body: z.object({
        chain: z.string({
            required_error: "chain is required",
        }),
    }),
});

export default async function validateGetTokenList(req: Request, res: Response, next: NextFunction) {
    try {
        await getTokenListSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}