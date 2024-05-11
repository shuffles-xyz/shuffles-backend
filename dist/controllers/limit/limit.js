"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLimitOrders = exports.getLimitOrder = exports.createLimitOrder = void 0;
const prims_client_1 = __importDefault(require("../../lib/prims-client"));
async function createLimitOrder(req, res) {
    const { address, input_token, output_token, in_amount, out_amount, buy_rate, tx_hash, gasFees, expiry, } = req.body;
    try {
        const [limitOrder] = await Promise.all([
            await prims_client_1.default.limit.create({
                data: {
                    address,
                    input_token,
                    output_token,
                    in_amount,
                    out_amount,
                    buy_rate,
                    tx_hash,
                    expiry,
                    gasFees
                },
            }),
            await prims_client_1.default.activity.create({
                data: {
                    address,
                    activity_type: 'LIMIT_ORDER',
                    activity: {
                        address,
                        input_token,
                        output_token,
                        in_amount,
                        out_amount,
                        buy_rate,
                        tx_hash,
                        expiry,
                        gasFees
                    }
                },
            })
        ]);
        res.status(200).json(limitOrder);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.createLimitOrder = createLimitOrder;
async function getLimitOrder(req, res) {
    const { tx } = req.params;
    try {
        const bridge = await prims_client_1.default.limit.findUnique({
            where: {
                tx_hash: tx,
            },
        });
        res.status(200).json(bridge);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
exports.getLimitOrder = getLimitOrder;
async function getAllLimitOrders(req, res) {
    const { address } = req.params;
    try {
        const bridge = await prims_client_1.default.limit.findMany({
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
exports.getAllLimitOrders = getAllLimitOrders;
//# sourceMappingURL=limit.js.map