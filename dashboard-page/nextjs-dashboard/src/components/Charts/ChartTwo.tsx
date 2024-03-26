import MarketOverview from "../TradingViewWidgets/MarketOverview";
const ChartTwo = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <div className="relative z-20 inline-block"></div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          <MarketOverview />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
