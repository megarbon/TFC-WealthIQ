import { Asset } from "./asset";
import { Portfolio } from "./portfolio";

export type Investment = {
    id: number;                        // Corresponding to Long id
    investmentPortfolio: Portfolio;  // Corresponding to InvestmentPortfolio investmentPortfolio
    asset: Asset;                      // Corresponding to Asset asset
    amount: number;                    // Corresponding to int amount
  }