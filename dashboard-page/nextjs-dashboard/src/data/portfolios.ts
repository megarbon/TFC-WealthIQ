import { Portfolio } from "../types/portfolio";

export const fetchPortfolioData = async () => {
  try {
    const response = await fetch("http://localhost:8085/portfolios/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Set mode to 'no-cors' here
    });
    if (!response.ok) {
      throw new Error("Failed to fetch portfolio data");
    }
    const data = await response.json();
    console.log("Portfolio data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw error;
  }
};
