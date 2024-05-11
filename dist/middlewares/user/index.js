"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
        deviceType: zod_1.z.string({
            required_error: "deviceType type is required",
        })
    }),
});
async function validateCreateUser(req, res, next) {
    try {
        await createUserSchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.default = validateCreateUser;
//# sourceMappingURL=index.js.map