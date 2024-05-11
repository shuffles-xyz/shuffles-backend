"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prims_client_1 = __importDefault(require("../../lib/prims-client"));
async function createWithdrawal(req, res) {
    const { address, receiver, token, amount, tx_hash } = req.body;
    try {
        console.log(req.body);
        const [withdrawal] = await Promise.all([
            await prims_client_1.default.withdrawal.create({
                data: {
                    address,
                    receiver,
                    token,
                    amount,
                    tx_hash
                }
            }),
            await prims_client_1.default.activity.create({
                data: {
                    address: address,
                    activity_type: 'WITHDRAW',
                    activity: {
                        receiver,
                        token,
                        amount,
                        tx_hash
                    }
                }
            })
        ]);
        res.status(200).json(withdrawal);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.default = createWithdrawal;
//# sourceMappingURL=withdraw.js.map