"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetAllLimit = exports.validateGetLimit = exports.validateCreateLimit = void 0;
const zod_1 = require("zod");
const createLimitSchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
        input_token: zod_1.z.object({}).required(),
        output_token: zod_1.z.object({}).required(),
        in_amount: zod_1.z.number({
            required_error: "in_amount is required",
        }),
        out_amount: zod_1.z.number({
            required_error: "out_amount is required",
        }),
        buy_rate: zod_1.z.number({
            required_error: "buy_rate is required",
        }),
        tx_hash: zod_1.z.string({
            required_error: "tx_hash is required",
        }),
        expiry: zod_1.z.string({
            required_error: "expiry is required",
        }),
        gasFees: zod_1.z.number({
            required_error: "gasFees is required",
        }),
    }),
});
const getLimitSchema = zod_1.z.object({
    body: zod_1.z.object({
        tx: zod_1.z.string({
            required_error: "tx-hash is required",
        }),
    }),
});
const getAllLimitSchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
    }),
});
async function validateCreateLimit(req, res, next) {
    try {
        await createLimitSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateCreateLimit = validateCreateLimit;
async function validateGetLimit(req, res, next) {
    try {
        await getLimitSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetLimit = validateGetLimit;
async function validateGetAllLimit(req, res, next) {
    try {
        await getAllLimitSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetAllLimit = validateGetAllLimit;
//# sourceMappingURL=index.js.map