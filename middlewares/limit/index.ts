import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const createLimitSchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
        input_token: z.object({

        }).required(),
        output_token: z.object({

        }).required(),
        in_amount: z.number({
            required_error: "in_amount is required",
        }),
        out_amount: z.number({
            required_error: "out_amount is required",
        }),
        buy_rate: z.number({
            required_error: "buy_rate is required",
        }),
        tx_hash: z.string({
            required_error: "tx_hash is required",
        }),
        expiry: z.string({
            required_error: "expiry is required",
        }),
    }),
});

const getLimitSchema = z.object({
    body: z.object({
        tx: z.string({
            required_error: "tx-hash is required",
        }),
    }),
});

const getAllLimitSchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
    }),
});

export async function validateCreateLimit(req: Request, res: Response, next: NextFunction) {
    try {
        await createLimitSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetLimit(req: Request, res: Response, next: NextFunction) {
    try {
        await getLimitSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetAllLimit(req: Request, res: Response, next: NextFunction) {
    try {
        await getAllLimitSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}