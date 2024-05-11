"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activity_1 = require("../controllers/activity/activity");
const activity_2 = require("../middlewares/activity");
const router = express_1.default.Router();
router.post("/create", activity_2.validateCreateActivity, activity_1.createActivity);
router.post("/get", activity_2.validateGetActivity, activity_1.getActivity);
exports.default = router;
//# sourceMappingURL=activity.js.map