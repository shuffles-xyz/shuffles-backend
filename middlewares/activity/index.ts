import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const createActivitySchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
        activity_type: z.string({
            required_error: "activity_type is required",
        }),
        activity: z.object({
        }).required(),
    }),
});

const getActivitySchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
    }),
});

export async function validateCreateActivity(req: Request, res: Response, next: NextFunction) {
    try {
        await createActivitySchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetActivity(req: Request, res: Response, next: NextFunction) {
    try {
        await getActivitySchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}