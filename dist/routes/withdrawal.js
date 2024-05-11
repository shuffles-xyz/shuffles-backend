"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const withdraw_1 = __importDefault(require("../controllers/withdraw/withdraw"));
const withdraw_2 = __importDefault(require("../middlewares/withdraw/withdraw"));
const router = express_1.default.Router();
router.post("/create", withdraw_2.default, withdraw_1.default);
exports.default = router;
//# sourceMappingURL=withdrawal.js.map