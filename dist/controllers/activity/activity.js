"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivity = exports.createActivity = void 0;
const prims_client_1 = __importDefault(require("../../lib/prims-client"));
async function createActivity(req, res) {
    const { address, activity_type, activity } = req.body;
    try {
        const activityRes = await prims_client_1.default.activity.create({
            data: {
                address,
                activity_type,
                activity
            },
        });
        res.status(200).json(activityRes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.createActivity = createActivity;
async function getActivity(req, res) {
    const { address } = req.body;
    try {
        const activityRes = await prims_client_1.default.activity.findMany({
            where: {
                address,
            },
            orderBy: {
                created_at: 'desc',
            },
        });
        res.status(200).json(activityRes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.getActivity = getActivity;
//# sourceMappingURL=activity.js.map