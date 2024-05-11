"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bridge_1 = require("../controllers/bridge/bridge");
const bridge_2 = require("../middlewares/bridge");
const router = express_1.default.Router();
router.post("/create", bridge_2.validateCreateBridge, bridge_1.createBridge);
router.post("/get", bridge_2.validateGetBridge, bridge_1.getBridgeTx);
router.post("/getAll", bridge_2.validateGetAllBridge, bridge_1.getAllTransactions);
exports.default = router;
//# sourceMappingURL=bridge.js.map