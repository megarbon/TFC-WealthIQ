import { Portfolio } from "../types/portfolio";
import { Investment } from "../types/investment";
import { Asset } from "../types/asset";

const API_BASE_URL = "http://localhost:8080";

const getTokenFromLocalStorage = () => localStorage.getItem("jwtToken");
const token1 = getTokenFromLocalStorage();

// Verificar si token1 no es null antes de usar trim()
const trimmedTokenOut = token1 ? token1.trim() : "";

console.log(token1);
console.log(trimmedTokenOut);

console.log(token1)
console.log(trimmedTokenOut)
// Function to fetch all portfolios
export const getAllPortfolios = async (): Promise<Portfolio[]> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }
  const trimmedToken = trimmedTokenOut;
  
  const response = await fetch(`${API_BASE_URL}/portfolios/getAll`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch portfolios");
  }

  return response.json();
};

// Function to fetch a portfolio by its ID
export const getPortfolioById = async (
  id: number
): Promise<Portfolio | null> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

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
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/update/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
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
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify(portfolio),
  });

  if (!response.ok) {
    throw new Error("Failed to create portfolio");
  }

  return response.json();
};

// Function to delete a portfolio
export const deletePortfolio = async (id: number): Promise<void> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  if (!response.ok) {
    throw new Error("Failed to delete portfolio");
  }
};

// Function to fetch all investments
export const getAllInvestments = async (): Promise<Investment[]> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/getAll`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch investments");
  }

  return response.json();
};

// Function to fetch an investment by its ID
export const getInvestmentById = async (
  id: number,
): Promise<Investment | null> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

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
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/update/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
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
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/addInvestment`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify(investment),
  });

  if (!response.ok) {
    throw new Error("Failed to create investment");
  }

  return response.json();
};

// Function to delete an investment
export const deleteInvestment = async (id: number): Promise<void> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "no-cors",
  });

  if (!response.ok) {
    throw new Error("Failed to delete investment");
  }
};

// Function to fetch all assets
export const getAllAssets = async (): Promise<Asset[]> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/assets/getAll`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "no-cors",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch assets");
  }

  return response.json();
};
