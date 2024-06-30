"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const withdrawSchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
        receiver: zod_1.z.string({
            required_error: "receiver address is required",
        }),
        token: zod_1.z.object({}).required(),
        amount: zod_1.z.number({
            required_error: "amount is required",
        }),
        txHash: zod_1.z.string({
            required_error: "txHash is required",
        }),
    }),
});
async function validateWithdrawal(req, res, next) {
    try {
        await withdrawSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.default = validateWithdrawal;
//# sourceMappingURL=withdraw.js.map