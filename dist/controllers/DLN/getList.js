"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getList = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function getList(req, res) {
    const chainId = req.params.chainId;
    try {
        const fileName = `${chainId}.json`;
        const filePath = path_1.default.join(__dirname, '../../data', fileName);
        if (!fs_1.default.existsSync(filePath)) {
            return res.status(404).json({ message: "File not found" });
        }
        const fileData = fs_1.default.readFileSync(filePath, 'utf-8');
        const tokenList = JSON.parse(fileData);
        return res.status(200).json(tokenList);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
exports.getList = getList;
//# sourceMappingURL=getList.js.map