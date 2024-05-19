import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const createBridgeSchema = z.object({
    body: z.object({
        src_address: z.string({
            required_error: "src_address is required",
        }),
        dst_address: z.string({
            required_error: "dst_address is required",
        }),
        src_chain: z.object({
        }).required(),
        dst_chain: z.object({
        }).required(),
        src_token: z.object({}).required(),
        dst_token: z.object({}).required(),
        src_amount: z.number({
            required_error: "src_amount is required",
        }),
        dst_amount: z.number({
            required_error: "dst_amount is required",
        }),
        tx_hash: z.string({
            required_error: "tx-hash is required",
        }),
        route: z.string({
            required_error: "route is required",
        }),
        address: z.string({
            required_error: "address is required",
        }),
        gasFees: z.number({
            required_error: "gasFees is required",
        }),
        orderId: z.string({
            required_error: "orderId is required",
        }),
    }),
});

const getBridgeSchema = z.object({
    body: z.object({
        tx: z.string({
            required_error: "tx is required",
        }),
    }),
});

const getAllBridgeSchema = z.object({
    body: z.object({
        address: z.string({
            required_error: "address is required",
        }),
    }),
});

export async function validateCreateBridge(req: Request, res: Response, next: NextFunction) {
    try {
        await createBridgeSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetBridge(req: Request, res: Response, next: NextFunction) {
    try {
        await getBridgeSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function validateGetAllBridge(req: Request, res: Response, next: NextFunction) {
    try {
        await getAllBridgeSchema.parseAsync({
            body: req.body,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}