"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const getTokenBalanceSchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
    }),
});
async function validateGetTokenBalance(req, res, next) {
    try {
        await getTokenBalanceSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.default = validateGetTokenBalance;
//# sourceMappingURL=index.js.map