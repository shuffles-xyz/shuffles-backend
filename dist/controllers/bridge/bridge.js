"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTransactions = exports.getBridgeTx = exports.createBridge = void 0;
const prims_client_1 = __importDefault(require("../../lib/prims-client"));
async function createBridge(req, res) {
    const { src_address, dst_address, src_chain, dst_chain, src_token, dst_token, src_amount, dst_amount, txHash, route, gasFees, address, orderId } = req.body;
    try {
        const [bridge] = await Promise.all([
            await prims_client_1.default.bridge.create({
                data: {
                    src_address,
                    dst_address,
                    src_chain,
                    dst_chain,
                    src_token,
                    dst_token,
                    src_amount,
                    dst_amount,
                    tx_hash: txHash,
                    route,
                    address,
                    gasFees,
                    orderId
                },
            }),
            await prims_client_1.default.activity.create({
                data: {
                    address,
                    activity_type: 'BRIDGE',
                    activity: {
                        src_address,
                        dst_address,
                        src_chain,
                        dst_chain,
                        src_token,
                        dst_token,
                        src_amount,
                        dst_amount,
                        txHash,
                        route,
                        orderId,
                        gasFees
                    }
                },
            })
        ]);
        res.status(200).json(bridge);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.createBridge = createBridge;
async function getBridgeTx(req, res) {
    const { tx } = req.body;
    try {
        const bridge = await prims_client_1.default.bridge.findUnique({
            where: {
                orderId: tx,
            },
        });
        res.status(200).json(bridge);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.getBridgeTx = getBridgeTx;
async function getAllTransactions(req, res) {
    const { address } = req.body;
    try {
        const bridge = await prims_client_1.default.bridge.findMany({
            where: {
                address,
            },
        });
        res.status(200).json(bridge);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.getAllTransactions = getAllTransactions;
//# sourceMappingURL=bridge.js.map