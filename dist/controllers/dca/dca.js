"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDCA = exports.getAllDCA = exports.createDCA = void 0;
const prims_client_1 = __importDefault(require("../../lib/prims-client"));
async function createDCA(req, res) {
    const { address, dca_key, input_token, output_token, in_amount, out_amount, gasFees } = req.body;
    try {
        const [dca] = await Promise.all([
            prims_client_1.default.dCA.create({
                data: {
                    address,
                    dca_key,
                    input_token,
                    output_token,
                    in_amount,
                    out_amount,
                    gasFees
                }
            }),
            prims_client_1.default.activity.create({
                data: {
                    address,
                    activity_type: 'DCA',
                    activity: {
                        dca_key,
                        input_token,
                        output_token,
                        in_amount,
                        out_amount,
                        gasFees
                    }
                },
            })
        ]);
        res.status(200).json(dca);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.createDCA = createDCA;
async function getDCA(req, res) {
    const { dca_key } = req.body;
    try {
        const dca = await prims_client_1.default.dCA.findFirst({
            where: {
                dca_key: {
                    contains: dca_key
                }
            }
        });
        res.status(200).json(dca);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.getDCA = getDCA;
async function getAllDCA(req, res) {
    const { address } = req.body;
    try {
        const dca = await prims_client_1.default.dCA.findMany({
            where: {
                address: address
            }
        });
        res.status(200).json(dca);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.getAllDCA = getAllDCA;
//# sourceMappingURL=dca.js.map