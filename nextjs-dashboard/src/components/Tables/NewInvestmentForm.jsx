"use client";
import React, { useState, useEffect } from "react";
import { createInvestment, getAllAssets } from "@/data/portfolios";

const NewInvestmentForm = ({ portfolioId }) => {
  const [assets, setAssets] = useState([]);
  const [selectedAssetId, setSelectedAssetId] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all assets when the component mounts ✅ tested and working
    const fetchAssets = async () => {
      try {
        const assetsData = await getAllAssets();
        setAssets(assetsData);
        if (assetsData.length > 0) {
          setSelectedAssetId(assetsData[0].id); // Set the default selected asset
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
        portfolioId: portfolioId, // Include the portfolio ID in the investment object
        investment: {
          asset: {
            id: parseInt(selectedAssetId),
          },
          amount: parseInt(investmentAmount),
        },
      };
      await createInvestment(investment);
      // Call a function to update the investments table

      // Clear form fields
      setSelectedAssetId("");
      setInvestmentAmount("");
      // Optionally, you can show a success message or redirect the user
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
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
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