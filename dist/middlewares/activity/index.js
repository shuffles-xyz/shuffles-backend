"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetActivity = exports.validateCreateActivity = void 0;
const zod_1 = require("zod");
const createActivitySchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
        activity_type: zod_1.z.string({
            required_error: "activity_type is required",
        }),
        activity: zod_1.z.object({}).required(),
    }),
});
const getActivitySchema = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string({
            required_error: "address is required",
        }),
    }),
});
async function validateCreateActivity(req, res, next) {
    try {
        await createActivitySchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateCreateActivity = validateCreateActivity;
async function validateGetActivity(req, res, next) {
    try {
        await getActivitySchema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.validateGetActivity = validateGetActivity;
//# sourceMappingURL=index.js.map