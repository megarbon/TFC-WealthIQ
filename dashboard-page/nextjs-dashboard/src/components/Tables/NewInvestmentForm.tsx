"use client";
import React, { useState, useEffect } from "react";
import { createInvestment, getAllAssets } from "@/data/portfolios";

const NewInvestmentForm = ({ portfolioId }) => {
  const [assets, setAssets] = useState([]);
  const [selectedAssetId, setSelectedAssetId] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const assetsData = await getAllAssets();
        setAssets(assetsData);
        if (assetsData.length > 0) {
          setSelectedAssetId(assetsData[0].id); // Set the default selected asset
        }
      } catch (error) {
        console.error("Error fetching assets:", error);
      }
    };

    fetchAssets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const investment = {
        asset: {
          id: parseInt(selectedAssetId),
        },
        amount: parseInt(investmentAmount),
        portfolioId: portfolioId, // Include the portfolio ID in the investment object
      };
      await createInvestment(investment);
      // Clear form fields
      setSelectedAssetId("");
      setInvestmentAmount("");
      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      console.error("Error creating investment:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="relative z-50">
      <form
        onSubmit={handleSubmit}
        className="dark:bg-gray-800 rounded-md border-stroke bg-white p-6 px-5 pb-2.5 pt-6 shadow-default shadow-md dark:border-strokedark dark:bg-boxdark"
      >
        <label className="mb-2 block font-semibold text-black dark:text-white">
          Select Asset:
        </label>
        <div className="relative">
          <select
            value={selectedAssetId}
            onChange={(e) => setSelectedAssetId(e.target.value)}
            className="border-gray-300 w-full appearance-none rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          >
            {assets.map((asset) => (
              <option key={asset.id} value={asset.id}>
                {asset.name} ({asset.symbol})
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="text-gray-400 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-2 mt-4 block font-semibold text-black dark:text-white">
            Investment Amount:
          </label>
          <input
            type="number"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            className="border-gray-300 w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
        >
          Create Investment
        </button>
      </form>
    </div>
  );
};

export default NewInvestmentForm;
