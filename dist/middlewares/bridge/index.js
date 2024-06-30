"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetAllBridge = exports.validateGetBridge = exports.validateCreateBridge = void 0;
const zod_1 = require("zod");
const createBridgeSchema = zod_1.z.object({
    body: zod_1.z.object({
        src_address: zod_1.z.string({
            required_error: "src_address is required",
        }),
        dst_address: zod_1.z.string({
            required_error: "dst_address is required",
        }),
        src_chain: zod_1.z.object({}).required(),
        dst_chain: zod_1.z.object({}).required(),
        src_token: zod_1.z.object({}).required(),
        dst_token: zod_1.z.object({}).required(),
        src_amount: zod_1.z.number({
            required_error: "src_amount is required",
        }),
        dst_amount: zod_1.z.number({
            required_error: "dst_amount is required",
        }),
        txHash: zod_1.z.string({
            required_error: "tx-hash is required",
        }),
        route: zod_1.z.string({
            required_error: "route is required",
        }),
        address: zod_1.z.string({
            required_error: "address is required",
        }),
        gasFees: zod_1.z.number({
            required_error: "gasFees is required",
        }),
        orderId: zod_1.z.string({
            required_error: "orderId is required",
        }),
    }),
});
const getBridgeSchema = zod_1.z.object({
    body: zod_1.z.object({
        tx: zod_1.z.string({
            required_error: "tx is required",
        }),
    }),
});
const getAllBridgeSchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
    }),
});
async function validateCreateBridge(req, res, next) {
    try {
        await createBridgeSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateCreateBridge = validateCreateBridge;
async function validateGetBridge(req, res, next) {
    try {
        await getBridgeSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetBridge = validateGetBridge;
async function validateGetAllBridge(req, res, next) {
    try {
        await getAllBridgeSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetAllBridge = validateGetAllBridge;
//# sourceMappingURL=index.js.map