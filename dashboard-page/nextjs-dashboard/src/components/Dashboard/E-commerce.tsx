"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartFour from "../Charts/ChartFour";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import MapOne from "../Maps/MapOne";
import SymbolOverview from "../TradingViewWidgets/SymbolOverview";
import Screener from "../TradingViewWidgets/Screener";
import Heatmap from "../Charts/Heatmap";
import TickerTape from "../Charts/TickerTape";
import StockNews from "../News/StockNews"

const ECommerce: React.FC = () => {
  return (
    <>

      <div className="mb-4 md:mt-6 col-span-12">
        <TickerTape/>
      </div>

      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        
      </div> */}
      
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* <ChartThree /> */}
        <Screener/>
        <SymbolOverview />
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <div className="mt-4  md:mt-6 2xl:mt-7.5 col-span-12">
        <StockNews />
        </div>
        
      </div>
      <div className="mt-4  md:mt-6 2xl:mt-7.5 col-span-12">
        <Heatmap/>
      </div>
      
    </>
  );
};

export default ECommerce;
