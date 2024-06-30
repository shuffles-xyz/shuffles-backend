"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const wallet_1 = __importDefault(require("./routes/wallet"));
const tokens_1 = __importDefault(require("./routes/tokens"));
const dln_1 = __importDefault(require("./routes/dln"));
const user_1 = __importDefault(require("./routes/user"));
const dca_1 = __importDefault(require("./routes/dca"));
const limit_1 = __importDefault(require("./routes/limit"));
const bridge_1 = __importDefault(require("./routes/bridge"));
const activity_1 = __importDefault(require("./routes/activity"));
const withdrawal_1 = __importDefault(require("./routes/withdrawal"));
const node_cron_1 = __importDefault(require("node-cron"));
const getTokenList_1 = require("./utils/getTokenList");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use("/api/wallet", wallet_1.default);
app.use("/api/tokens", tokens_1.default);
app.use("/api/dln", dln_1.default);
app.use("/api/user", user_1.default);
app.use("/api/dca", dca_1.default);
app.use("/api/limit", limit_1.default);
app.use("/api/bridge", bridge_1.default);
app.use("/api/activity", activity_1.default);
app.use("/api/withdrawal", withdrawal_1.default);
node_cron_1.default.schedule("* 23 * * * *", getTokenList_1.getTokenList);
app.get('/', (_, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map