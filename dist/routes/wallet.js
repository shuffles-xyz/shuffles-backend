"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const balance_1 = require("../controllers/wallet/balance");
const wallet_1 = __importDefault(require("../middlewares/wallet"));
const router = express_1.default.Router();
router.get("/:address", wallet_1.default, balance_1.getTokenBalance);
exports.default = router;
//# sourceMappingURL=wallet.js.map