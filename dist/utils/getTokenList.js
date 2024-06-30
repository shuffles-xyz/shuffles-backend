"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenList = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chains = [
    "42161",
    "43114",
    "56",
    "1",
    "137",
    "7565164",
    "59144",
    "8453",
    "10"
];
async function getTokenList() {
    try {
        console.log('Fetching', chains.length, 'token lists');
        const promises = chains.map(async (chainId) => {
            console.log('Fetching token list', chainId);
            const response = await fetch(`https://api.dln.trade/v1.0/token-list?chainId=${chainId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log('Token list fetched', chainId);
            const tokens = data.tokens;
            let tokenList = [];
            for (const key in tokens) {
                if (Object.hasOwnProperty.call(tokens, key)) {
                    const token = tokens[key];
                    tokenList.push({
                        address: token.address,
                        name: token.name,
                        symbol: token.symbol,
                        image: token.logoURI,
                        decimals: token.decimals,
                    });
                }
            }
            const fileName = `${chainId}.json`;
            const filePath = path_1.default.join(__dirname, '../data', fileName);
            fs_1.default.writeFileSync(filePath, JSON.stringify(tokenList, null, 2));
            console.log('Token list saved', chainId);
        });
        await Promise.all(promises);
    }
    catch (error) {
        console.log(error);
    }
}
exports.getTokenList = getTokenList;
//# sourceMappingURL=getTokenList.js.map