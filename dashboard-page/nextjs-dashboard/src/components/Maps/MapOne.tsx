import SymbolOverview from "../TradingViewWidgets/SymbolOverview";
const MapOne = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="h-70">
        <SymbolOverview />
      </div>
    </div>
  );
};

export default MapOne;
