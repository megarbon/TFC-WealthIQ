import { Portfolio } from "../types/portfolio";
import { Investment } from "../types/investment";
import { Asset } from "../types/asset";

const API_BASE_URL = "http://localhost:8080";

const getTokenFromLocalStorage = () => localStorage.getItem("jwtToken");
const token1 = getTokenFromLocalStorage();

// Verificar si token1 no es null antes de usar trim()
const trimmedToken = token1 ? token1.trim() : "";


// Function to fetch all portfolios
export const getAllPortfolios = async (): Promise<Portfolio[]> => {
  const trimmedToken = localStorage.getItem('jwtToken')?.trim();

  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${trimmedToken}`);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    mode: "no-cors",
    redirect: "follow",
  };

  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/getAll`, requestOptions);

    if (!response.ok) {
      throw new Error("Failed to fetch portfolios");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching portfolios: ${error.message}`);
  }
};



export const getPortfolioById = async (id: number): Promise<Portfolio | null> => {
  const trimmedToken = localStorage.getItem('jwtToken')?.trim();

  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${trimmedToken}`);
  headers.append("Content-Type", "application/json");

  const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
    method: "GET",
    headers: headers,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/update/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/getAll`, {
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/${id}`, {
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/update/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/portfolios/addInvestment`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
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
  if (!trimmedToken) {
    throw new Error("No token found in local storage");
  }

  const response = await fetch(`${API_BASE_URL}/investments/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
    },
    mode: "no-cors",
  });

  if (!response.ok) {
    throw new Error("Failed to delete investment");
  }
};

// Function to fetch all assets
export const getAllAssets = async (): Promise<Asset[]> => {
  // Retrieve the token from localStorage and remove quotes
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    throw new Error("No token found in local storage");
  }
  const trimmedToken = token.replace(/^"|"$/g, ""); // Remove quotes at the beginning and end

  const response = await fetch(`${API_BASE_URL}/assets/getAll`, {
    headers: {
      Authorization: `Bearer ${trimmedToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch assets");
  }

  return response.json();
};
