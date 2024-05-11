"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user/user"));
const user_2 = __importDefault(require("../middlewares/user"));
const router = express_1.default.Router();
router.post("/create", user_2.default, user_1.default);
exports.default = router;
//# sourceMappingURL=user.js.map