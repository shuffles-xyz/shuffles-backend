export interface IToken {
    price: string;
    name: string;
    image: string;
    symbol: string;
    balance: number;
    address: string;
    decimal: number;
  }
  
  export interface JupTokens {
    address: string
    chainId: number
    decimals: number
    name: string
    symbol: string
    logoURI: string
    extensions: Extensions
    tags: string[],
  }
  
  export interface Extensions {
    coingeckoId: string
  }
  
  export type Wallet = {
    name: string;
    seed: string | null;
    publicKey: string;
    secretKey: string;
  }

  export type Token = {
    address: string,
    name: string,
    symbol: string,
    image: string,
    decimals: number,
  }