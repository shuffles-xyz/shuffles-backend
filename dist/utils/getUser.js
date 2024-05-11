"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prims_client_1 = __importDefault(require("../lib/prims-client"));
async function getUser(address) {
    try {
        const user = await prims_client_1.default.user.findFirst({
            where: {
                address: {
                    contains: address
                }
            }
        });
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.default = getUser;
//# sourceMappingURL=getUser.js.map