// components/TableTwo.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Portfolio } from "@/types/portfolio";
import { getAllPortfolios } from "@/data/portfolios";

const PortfolioTable = () => {
  const [portfolioData, setPortfolioData] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPortfolios();
        setPortfolioData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Portfolios
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Portfolio ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Investment ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Asset Name
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Asset Symbol
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
        </div>

        {portfolioData.map((portfolio, key) => (
          <React.Fragment key={key}>
            {portfolio.investments.map((investment, idx) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${
                  idx === portfolio.investments.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                }`}
                key={idx}
              >
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{portfolio.id}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{investment.id}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">
                    {investment.asset.name}
                  </p>
                </div>
                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">
                    {investment.asset.symbol}
                  </p>
                </div>
                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">
                    {investment.amount}
                  </p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTable;
