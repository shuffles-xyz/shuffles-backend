import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const createDCASchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
        dca_key: z.string({
            required_error: "dca_key is required",
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
        gasFees: z.number({
            required_error: "gasFees is required",
        }),
        txHash: z.string({
            required_error: "txHash is required",
        }),
    }),
});

const getDCASchema = z.object({
    body: z.object({
        dca_key: z.string({
            required_error: "dca_key is required",
        }),
    }),
});

const getAllDCASchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
    }),
});

export async function validateCreateDCA(req: Request, res: Response, next: NextFunction) {
    try {
        await createDCASchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetDCA(req: Request, res: Response, next: NextFunction) {
    try {
        await getDCASchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetAllDCA(req: Request, res: Response, next: NextFunction) {
    try {
        await getAllDCASchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}