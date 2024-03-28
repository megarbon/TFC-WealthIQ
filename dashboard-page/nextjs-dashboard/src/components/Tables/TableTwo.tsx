import React from "react";
import Image from "next/image";
import { Portfolio } from "@/types/portfolio";
import { investment } from "@/types/investment";
import { asset } from "@/types/asset";

const portfolioData: Portfolio[] = [
  {
    id: 1,
    investments: [
      {
        id: 1,
        asset: {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          market: "Crypto",
        },
        amount: 1000,
      },
    ],
  },
  {
    id: 2,
    investments: [
      {
        id: 2,
        asset: {
          id: 2,
          name: "Microsoft",
          symbol: "MSFT",
          market: "NASDAQ",
        },
        amount: 5,
      },
    ],
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Portfolio
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Asset Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Symbol</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Market</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Amount</p>
        </div>
      </div>

      {portfolioData.map((portfolio, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          {portfolio.investments.map((investment, index) => (
            <React.Fragment key={index}>
              <div className="col-span-3 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {investment.asset.name}
                </p>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {investment.asset.symbol}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {investment.asset.market}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {investment.amount}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
