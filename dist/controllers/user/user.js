"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prims_client_1 = __importDefault(require("../../lib/prims-client"));
const getUser_1 = __importDefault(require("../../utils/getUser"));
async function createUser(req, res) {
    const { address, deviceType } = req.body;
    try {
        const userExists = await (0, getUser_1.default)(address);
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const user = await prims_client_1.default.user.create({
            data: {
                address: address,
                device_type: deviceType,
            }
        });
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.default = createUser;
//# sourceMappingURL=user.js.map