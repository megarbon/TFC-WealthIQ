import { Portfolio } from "./portfolio";

export interface Investment {
  asset: {
    id: number;
    name: string;
    symbol: string;
    market: string;
  };
  amount: number;
  investmentPortfolio: Portfolio;
}