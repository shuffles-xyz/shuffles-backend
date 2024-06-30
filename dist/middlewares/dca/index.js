"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetAllDCA = exports.validateGetDCA = exports.validateCreateDCA = void 0;
const zod_1 = require("zod");
const createDCASchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
        dca_key: zod_1.z.string({
            required_error: "dca_key is required",
        }),
        input_token: zod_1.z.object({}).required(),
        output_token: zod_1.z.object({}).required(),
        in_amount: zod_1.z.number({
            required_error: "in_amount is required",
        }),
        out_amount: zod_1.z.number({
            required_error: "out_amount is required",
        }),
        gasFees: zod_1.z.number({
            required_error: "gasFees is required",
        }),
        txHash: zod_1.z.string({
            required_error: "txHash is required",
        }),
    }),
});
const getDCASchema = zod_1.z.object({
    body: zod_1.z.object({
        dca_key: zod_1.z.string({
            required_error: "dca_key is required",
        }),
    }),
});
const getAllDCASchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
    }),
});
async function validateCreateDCA(req, res, next) {
    try {
        await createDCASchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateCreateDCA = validateCreateDCA;
async function validateGetDCA(req, res, next) {
    try {
        await getDCASchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetDCA = validateGetDCA;
async function validateGetAllDCA(req, res, next) {
    try {
        await getAllDCASchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetAllDCA = validateGetAllDCA;
//# sourceMappingURL=index.js.map