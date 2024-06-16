"use client";
import React, { useState, useEffect } from "react";
import { createInvestment, getAllAssets } from "@/data/portfolios";

const NewInvestmentForm = () => {
  const [assets, setAssets] = useState([]);
  const [selectedAssetId, setSelectedAssetId] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [portfolioId, setPortfolioId] = useState(null); // Initialize portfolioId state

  useEffect(() => {
    const fetchPortfolioId = async () => {
      try {
        const storedPortfolioId = localStorage.getItem("userId");
        if (storedPortfolioId) {
          setPortfolioId(parseInt(storedPortfolioId, 10));
        } else {
          console.error("No portfolioId found in localStorage");
          setError("No portfolioId found");
        }
      } catch (error) {
        console.error("Error fetching portfolioId:", error);
        setError("Failed to fetch portfolioId");
      }
    };

    fetchPortfolioId();

    const fetchAssets = async () => {
      try {
        const assetsData = await getAllAssets();
        setAssets(assetsData);
        if (assetsData.length > 0) {
          setSelectedAssetId(assetsData[0].id.toString());
        }
      } catch (error) {
        console.error("Error fetching assets:", error);
        setError("Failed to fetch assets");
      }
    };

    fetchAssets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const investment = {
        asset: {
          id: parseInt(selectedAssetId),
        },
        amount: parseInt(investmentAmount),
        investmentPortfolio: {
          id: portfolioId, // Ensure this matches your backend relationship
        },
      };
      console.log("Investment object:", investment);
      await createInvestment(investment);
      setSelectedAssetId("");
      setInvestmentAmount("");
    } catch (error) {
      console.error("Error creating investment:", error);
      setError("Failed to create investment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="asset" className="block font-semibold">
            Select Asset:
          </label>
          <select
            id="asset"
            value={selectedAssetId}
            onChange={(e) => setSelectedAssetId(e.target.value)}
            className="block w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
            required
          >
            {assets.map((asset) => (
              <option key={asset.id} value={asset.id}>
                {asset.name} ({asset.symbol})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount" className="block font-semibold">
            Investment Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            className="block w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Adding Investment..." : "Add Investment"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default NewInvestmentForm;

