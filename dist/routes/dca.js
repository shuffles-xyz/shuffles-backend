"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dca_1 = require("../controllers/dca/dca");
const dca_2 = require("../middlewares/dca");
const router = express_1.default.Router();
router.post("/create", dca_2.validateCreateDCA, dca_1.createDCA);
router.post("/get", dca_2.validateGetDCA, dca_1.getDCA);
router.post("/getAll", dca_2.validateGetAllDCA, dca_1.getAllDCA);
exports.default = router;
//# sourceMappingURL=dca.js.map