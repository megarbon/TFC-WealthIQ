import MarketOverview from "../TradingViewWidgets/MarketOverview";
const ChartTwo = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="h-100">
          <MarketOverview />
      </div>
    </div>
  );
};

export default ChartTwo;
