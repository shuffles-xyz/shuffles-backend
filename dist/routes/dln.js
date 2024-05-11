"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getList_1 = require("../controllers/DLN/getList");
const router = express_1.default.Router();
router.get("/token-list/:chainId", getList_1.getList);
exports.default = router;
//# sourceMappingURL=dln.js.map