import React from "react";
import Screener from "../TradingViewWidgets/Screener";

const ChartThree = () => {
  return (
    <div className="col-span-12 rounded-sm  border-stroke bg-white px-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="">
        <div id="chartThree" className="h-100 mx-auto flex justify-center">
          <Screener />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
