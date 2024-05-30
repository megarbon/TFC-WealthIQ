"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import SymbolOverview from "../TradingViewWidgets/SymbolOverview";
import Screener from "../TradingViewWidgets/Screener";
import Heatmap from "../TradingViewWidgets/Heatmap";
import TickerTape from "../TradingViewWidgets/TickerTape";
import StockNews from "../News/StockNews";
import MarketOverview from "../TradingViewWidgets/MarketOverview";

const StocksDashboard: React.FC = () => {
  return (
    <>
      <div className="col-span-12 mb-4 ">
        <TickerTape />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <MarketOverview />
        {/* <ChartOne /> */}
        <StockNews />
        <Screener />
        <SymbolOverview/>

        <Heatmap />
        {/* <MarketOverview /> */}
      </div>
    </>
  );
};

export default StocksDashboard;
