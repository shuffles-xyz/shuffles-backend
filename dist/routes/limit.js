"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const limit_1 = require("../controllers/limit/limit");
const limit_2 = require("../middlewares/limit");
const router = express_1.default.Router();
router.post("/create", limit_2.validateCreateLimit, limit_1.createLimitOrder);
router.post("/get", limit_2.validateGetLimit, limit_1.getLimitOrder);
router.post("/getAll", limit_2.validateGetAllLimit, limit_1.getAllLimitOrders);
exports.default = router;
//# sourceMappingURL=limit.js.map