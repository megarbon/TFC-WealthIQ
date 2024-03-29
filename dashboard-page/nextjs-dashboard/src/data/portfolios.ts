import { Portfolio } from "../types/portfolio";
import { Investment } from "../types/investment";
import { Asset } from "../types/asset";

const API_BASE_URL = "http://localhost:8085"; // Change this to your API base URL

// Function to fetch all portfolios
export const getAllPortfolios = async (): Promise<Portfolio[]> => {
  const response = await fetch(`${API_BASE_URL}/portfolios/getAll`);
  if (!response.ok) {
    throw new Error("Failed to fetch portfolios");
  }
  return response.json();
};

// Function to fetch a portfolio by its ID
export const getPortfolioById = async (
  id: number,
): Promise<Portfolio | null> => {
  const response = await fetch(`${API_BASE_URL}/portfolios/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null; // Portfolio not found
    }
    throw new Error("Failed to fetch portfolio");
  }
  return response.json();
};

// Function to update a portfolio
export const updatePortfolio = async (
  id: number,
  portfolio: Portfolio,
): Promise<Portfolio | null> => {
  const response = await fetch(`${API_BASE_URL}/portfolios/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(portfolio),
  });
  if (!response.ok) {
    throw new Error("Failed to update portfolio");
  }
  return response.json();
};

// Function to create a new portfolio
export const createPortfolio = async (
  portfolio: Portfolio,
): Promise<Portfolio | null> => {
  const response = await fetch(`${API_BASE_URL}/portfolios/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(portfolio),
  });
  if (!response.ok) {
    throw new Error("Failed to create portfolio");
  }
  return response.json();
};

// Function to delete a portfolio
export const deletePortfolio = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/portfolios/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete portfolio");
  }
};

// Function to fetch all investments
export const getAllInvestments = async (): Promise<Investment[]> => {
  const response = await fetch(`${API_BASE_URL}/investments/getAll`);
  if (!response.ok) {
    throw new Error("Failed to fetch investments");
  }
  return response.json();
};

// Function to fetch an investment by its ID
export const getInvestmentById = async (
  id: number,
): Promise<Investment | null> => {
  const response = await fetch(`${API_BASE_URL}/investments/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null; // Investment not found
    }
    throw new Error("Failed to fetch investment");
  }
  return response.json();
};

// Function to update an investment
export const updateInvestment = async (
  id: number,
  investment: Investment,
): Promise<Investment | null> => {
  const response = await fetch(`${API_BASE_URL}/investments/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(investment),
  });
  if (!response.ok) {
    throw new Error("Failed to update investment");
  }
  return response.json();
};

// Function to create a new investment for a portfolio
export const createInvestment = async (
  investment: Investment,
): Promise<Investment | null> => {
  const response = await fetch(`${API_BASE_URL}/portfolios/addInvestment`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(investment),
  });
  if (!response.ok) {
    throw new Error("Failed to create investment");
  }
  return response.json();
};

// Function to delete an investment
export const deleteInvestment = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/investments/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete investment");
  }
};

// Function to fetch all assets
// Function to fetch all investments
export const getAllAssets = async (): Promise<Asset[]> => {
  const response = await fetch(`${API_BASE_URL}/assets/getAll`);
  if (!response.ok) {
    throw new Error("Failed to fetch investments");
  }
  return response.json();
};
