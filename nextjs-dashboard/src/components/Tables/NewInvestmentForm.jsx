"use client";
import React, { useState, useEffect } from "react";

// Functions to interact with the API
const getAllAssets = async () => {
  const response = await fetch("http://localhost:8080/assets/getAll");
  if (!response.ok) {
    throw new Error("Failed to fetch assets");
  }
  return await response.json();
};

const createInvestment = async (investment) => {
  const response = await fetch("http://localhost:8080/investments/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(investment),
  });

  if (!response.ok) {
    throw new Error("Failed to create investment");
  }

  return await response.json();
};

const deleteInvestment = async (id) => {
  const response = await fetch(`http://localhost:8080/investments/delete/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete investment");
  }

  return await response.json();
};

const NewInvestmentForm = ({ portfolioId }) => {
  const [assets, setAssets] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [selectedAssetId, setSelectedAssetId] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const assetsData = await getAllAssets();
        setAssets(assetsData);
        if (assetsData.length > 0) {
          setSelectedAssetId(assetsData[0].id);
        }
      } catch (error) {
        console.error("Error fetching assets:", error);
        setError("Failed to fetch assets");
      }
    };

    const fetchInvestments = async () => {
      try {
        const response = await fetch("http://localhost:8080/investments/getAll");
        const data = await response.json();
        setInvestments(data);
      } catch (error) {
        console.error("Error fetching investments:", error);
        setError("Failed to fetch investments");
      }
    };

    fetchAssets();
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const response = await fetch("http://localhost:8080/investments/getAll");
      const data = await response.json();
      setInvestments(data);
    } catch (error) {
      console.error("Error fetching investments:", error);
      setError("Failed to fetch investments");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const investment = {
        id: portfolioId,
        asset: {
          id: parseInt(selectedAssetId),
        },
        amount: parseInt(investmentAmount),
      };
      await createInvestment(investment);
      setSelectedAssetId("");
      setInvestmentAmount("");
      await fetchInvestments();
    } catch (error) {
      console.error("Error creating investment:", error);
      setError("Failed to create investment");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInvestment(id);
      await fetchInvestments();
    } catch (error) {
      console.error("Error deleting investment:", error);
      setError("Failed to delete investment");
    }
  };

  const totalAmountInvested = investments.reduce((total, investment) => total + investment.amount, 0);
  const uniqueAssets = new Set(investments.map(investment => investment.asset.id)).size;
  const uniqueMarkets = new Set(investments.map(investment => investment.asset.market)).size;

  return (
    <div className="relative z-50">
      <div className="rounded-sm border border-stroke bg-gray px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Your Investments
        </h4>

        <div className="flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-3 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
            <div className="p-2.5">
              <h5 className="text-sm font-medium uppercase">Investment ID</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Asset Name</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Asset Symbol</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Market</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Amount</h5>
            </div>
            <div className="p-2.5 text-center">
              <h5 className="text-sm font-medium uppercase">Actions</h5>
            </div>
          </div>

          {/* Table Body */}
          {investments.map((investment, idx) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-6 ${idx === investments.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
                }`}
              key={investment.id}
            >
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{investment.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{investment.asset.name}</p>
              </div>
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{investment.asset.symbol}</p>
              </div>
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{investment.asset.market}</p>
              </div>
              <div className="flex items-center justify-center p-2.5">
                <p className="text-black dark:text-white">{investment.amount}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 text-center">
                <button
                  onClick={() => handleDelete(investment.id)}
                  className="text-red-500 text-xl hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-sm border border-stroke bg-gray px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Add New Investment
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
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

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
          <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Total Amount Invested</h5>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">{totalAmountInvested}</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
          <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Unique Assets</h5>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">{uniqueAssets}</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
          <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Unique Markets</h5>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">{uniqueMarkets}</p>
        </div>
      </div>
    </div>
  );
};

export default NewInvestmentForm;
