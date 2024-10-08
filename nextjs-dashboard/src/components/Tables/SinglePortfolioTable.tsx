"use client";
import React, { useEffect, useState } from "react";
import { Portfolio } from "@/types/portfolio";
import { Investment } from "@/types/investment";

import { getPortfolioById, createPortfolio, createInvestment } from "@/data/portfolios";

const PortfolioTable = () => {
  const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newInvestment, setNewInvestment] = useState<Investment>({
    asset: { id: 0, name: "", symbol: "", market: "" },
    amount: 0,
    investmentPortfolio: {
      id: 0, user: { userId: 0, username: "", password: "", firstname: "", surname: "", description: "" },
      investments: []
    }
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPortfolioById(1); // Replace with dynamic ID if needed
        setPortfolioData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);


  const handleAddInvestment = async (investment: Investment) => {
    try {
      await createInvestment(investment);
      // Refresh portfolio data after adding investment
      const updatedPortfolio = await getPortfolioById(1);
      setPortfolioData(updatedPortfolio);
      setShowModal(false); // Close modal after adding investment
    } catch (error) {
      console.error("Error adding investment:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative z-50">
      <div className="rounded-sm border border-stroke bg-gray px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Personal Portfolio Details
        </h4>

        <div className="flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-3 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-5">
            {/* Header Columns */}
            <div className="p-2.5">
              <h5 className="text-sm font-medium uppercase">Portfolio ID</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Investment ID</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Asset Name</h5>
            </div>
            {/* Additional Columns */}
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase">Asset Symbol</h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase">Amount</h5>
            </div>
          </div>

          {/* Table Body */}
          {portfolioData?.investments.map((investment, idx) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${idx === portfolioData.investments.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
                }`}
              key={investment.investmentPortfolio.id}
            >
              {/* Investment Details */}
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{portfolioData.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{investment.investmentPortfolio.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">
                  {investment.asset.name}
                </p>
              </div>
              {/* Additional Columns */}
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
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;
