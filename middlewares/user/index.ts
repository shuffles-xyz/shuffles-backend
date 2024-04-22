import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const createUserSchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
        deviceType: z.string({
            required_error: "deviceType type is required",
        })
    }),
});

export default async function validateCreateUser(req: Request, res: Response, next: NextFunction) {
    try {
        await createUserSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}