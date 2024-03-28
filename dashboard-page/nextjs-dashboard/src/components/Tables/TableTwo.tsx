// components/TableTwo.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Portfolio } from "@/types/portfolio";
import { fetchPortfolioData } from "@/data/portfolios";

const PortfolioTable = () => {
  const [portfolioData, setPortfolioData] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPortfolioData();
        setPortfolioData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Portfolio</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.map((portfolio) => (
            <tr key={portfolio.id}>
              <td>{portfolio.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
