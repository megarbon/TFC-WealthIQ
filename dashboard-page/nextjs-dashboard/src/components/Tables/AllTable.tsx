"use client";
import React, { useState, useEffect } from "react";
import {
  getAllPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getAllInvestments,
  createInvestment,
  updateInvestment,
  deleteInvestment,
} from "@/data/portfolios";

const App = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioFormData, setPortfolioFormData] = useState({
    name: "",
    description: "",
  });
  const [investments, setInvestments] = useState([]);
  const [investmentFormData, setInvestmentFormData] = useState({
    portfolioId: "",
    assetName: "",
    amount: "",
  });

  useEffect(() => {
    fetchPortfolios();
    fetchInvestments();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const data = await getAllPortfolios();
      setPortfolios(data);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  const fetchInvestments = async () => {
    try {
      const data = await getAllInvestments();
      setInvestments(data);
    } catch (error) {
      console.error("Error fetching investments:", error);
    }
  };

  const handlePortfolioFormChange = (e) => {
    setPortfolioFormData({
      ...portfolioFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePortfolioFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPortfolio(portfolioFormData);
      fetchPortfolios(); // Refresh portfolios after creation
      setPortfolioFormData({ name: "", description: "" }); // Clear form data
    } catch (error) {
      console.error("Error creating portfolio:", error);
    }
  };

  const handleInvestmentFormChange = (e) => {
    setInvestmentFormData({
      ...investmentFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInvestmentFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInvestment(investmentFormData);
      fetchInvestments(); // Refresh investments after creation
      setInvestmentFormData({ portfolioId: "", assetName: "", amount: "" }); // Clear form data
    } catch (error) {
      console.error("Error creating investment:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Create portfolio form */}
      <form onSubmit={handlePortfolioFormSubmit} className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Create Portfolio</h2>
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={portfolioFormData.name}
            onChange={handlePortfolioFormChange}
            className="mb-2 w-full rounded-md border px-4 py-2 sm:mb-0 sm:mr-2 sm:w-1/2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={portfolioFormData.description}
            onChange={handlePortfolioFormChange}
            className="mb-2 w-full rounded-md border px-4 py-2 sm:mb-0 sm:ml-2 sm:w-1/2"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
        >
          Create Portfolio
        </button>
      </form>

      {/* Portfolio table */}
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Portfolios</h2>
        <table className="w-full border-collapse rounded-md border">
          <thead>
            <tr>
              <th className="bg-gray-200 px-4 py-2">Name</th>
              <th className="bg-gray-200 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio) => (
              <tr key={portfolio.id} className="odd:bg-gray-100">
                <td className="px-4 py-2">{portfolio.name}</td>
                <td className="px-4 py-2">{portfolio.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create investment form */}
      <form onSubmit={handleInvestmentFormSubmit} className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Create Investment</h2>
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            name="portfolioId"
            placeholder="Portfolio ID"
            value={investmentFormData.portfolioId}
            onChange={handleInvestmentFormChange}
            className="mb-2 w-full rounded-md border px-4 py-2 sm:mb-0 sm:mr-2 sm:w-1/3"
          />
          <input
            type="text"
            name="assetName"
            placeholder="Asset Name"
            value={investmentFormData.assetName}
            onChange={handleInvestmentFormChange}
            className="mb-2 w-full rounded-md border px-4 py-2 sm:mx-2 sm:mb-0 sm:w-1/3"
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={investmentFormData.amount}
            onChange={handleInvestmentFormChange}
            className="mb-2 w-full rounded-md border px-4 py-2 sm:mb-0 sm:ml-2 sm:w-1/3"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
        >
          Create Investment
        </button>
      </form>

      {/* Investment table */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Investments</h2>
        <table className="w-full border-collapse rounded-md border">
          <thead>
            <tr>
              <th className="bg-gray-200 px-4 py-2">Portfolio ID</th>
              <th className="bg-gray-200 px-4 py-2">Asset Name</th>
              <th className="bg-gray-200 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <tr key={investment.id} className="odd:bg-gray-100">
                <td className="px-4 py-2">{investment.portfolioId}</td>
                <td className="px-4 py-2">{investment.assetName}</td>
                <td className="px-4 py-2">{investment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
