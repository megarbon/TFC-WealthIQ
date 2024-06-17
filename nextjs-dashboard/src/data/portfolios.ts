import { Portfolio } from "../types/portfolio";
import { Investment } from "../types/investment";
import { Asset } from "../types/asset";

const API_BASE_URL = "http://localhost:8080";

const getTokenFromLocalStorage = () => localStorage.getItem("jwtToken");
const token1 = getTokenFromLocalStorage();

// Verificar si token1 no es null antes de usar trim()
const trimmedToken = token1 ? token1.trim() : "";

// Validation functions
const isInvestment = (obj: any): obj is Investment => {
  return (
    typeof obj.id === "number" &&
    typeof obj.amount === "number" &&
    isAsset(obj.asset) &&
    isPortfolioShallow(obj.investmentPortfolio)
  );
};

const isUser = (obj: any): obj is User => {
  return (
    typeof obj.userId === "number" &&
    typeof obj.username === "string" &&
    typeof obj.password === "string" &&
    typeof obj.firstname === "string" &&
    typeof obj.surname === "string" &&
    typeof obj.description === "string"
  );
};

const isAsset = (obj: any): obj is Asset => {
  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.symbol === "string" &&
    typeof obj.market === "string"
  );
};

const isPortfolioShallow = (obj: any): obj is Partial<Portfolio> => {
  return (
    typeof obj.id === "number"
  );
};

const isPortfolio = (obj: any): obj is Portfolio => {
  return (
    isPortfolioShallow(obj) &&
    Array.isArray(obj.investments) &&
    obj.investments.every(isInvestment) &&
    isUser(obj.user)
  );
};


export const getAllPortfolios = async (): Promise<Portfolio[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch portfolios from the server");
    }

    const data: Portfolio[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching portfolios: ${error.message}`);
  }
};


export const getPortfolioById = async (id: number): Promise<Portfolio | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null; // Portfolio not found
      }
      throw new Error("Failed to fetch portfolio");
    }

    const data: Portfolio = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching portfolio ${id}: ${error.message}`);
  }
};


// Function to update a portfolio
export const updatePortfolio = async (
  id: number,
  portfolio: Portfolio,
): Promise<Portfolio | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/update/${id}`, {
      method: "PUT",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(portfolio),
    });

    if (!response.ok) {
      throw new Error("Failed to update portfolio");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error updating portfolio ${id}: ${error.message}`);
  }
};


// Function to create a new portfolio
export const createPortfolio = async (
  portfolio: Portfolio,
): Promise<Portfolio | null> => {
  try {
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
  } catch (error) {
    throw new Error(`Error creating portfolio: ${error.message}`);
  }
};


// Function to delete a portfolio
export const deletePortfolio = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/delete/${id}`, {
      method: "DELETE",
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error("Failed to delete portfolio");
    }
  } catch (error) {
    throw new Error(`Error deleting portfolio ${id}: ${error.message}`);
  }
};


// Function to fetch all investments
export const getAllInvestments = async (): Promise<Investment[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/investments/getAll`, {
      method: "GET",
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch investments");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching investments: ${error.message}`);
  }
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

// Function to create an investment
export const createInvestment = async (investment: Investment): Promise<Investment | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/investments/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(investment),
    });

    if (!response.ok) {
      throw new Error("Failed to create investment");
    }

    return response.json(); // Assuming the response body is the created investment object
  } catch (error) {
    throw new Error(`Error creating investment: ${error.message}`);
  }
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
