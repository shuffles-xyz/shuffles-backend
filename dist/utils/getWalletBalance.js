"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletBalance = void 0;
async function getWalletBalance(address) {
    const response = await fetch(`https://api.shyft.to/sol/v1/wallet/balance?network=mainnet-beta&wallet=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SHYFT_API_KEY
        }
    });
    const data = await response.json();
    const balanceResponse = await fetch(`https://public-api.birdeye.so/defi/price?address=So11111111111111111111111111111111111111112`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': process.env.BIRDEYE_API_KEY
        }
    });
    const balanceData = await balanceResponse.json();
    return {
        balance: data.result.balance,
        price: balanceData.data.value * data.result.balance,
        rawPrice: balanceData.data.value,
    };
}
exports.getWalletBalance = getWalletBalance;
//# sourceMappingURL=getWalletBalance.js.map