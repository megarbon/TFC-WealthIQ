import Image from "next/image";

const stockData = [
  {
    logo: "/images/brand/brand-01.svg",
    company: "Google",
    symbol: "GOOGL",
    price: "2,250.67",
    change: "+3.45%",
    volume: "2.5M",
    marketCap: "1.5T",
  },
  {
    logo: "/images/brand/brand-02.svg",
    company: "Twitter",
    symbol: "TWTR",
    price: "55.34",
    change: "-1.2%",
    volume: "1.2M",
    marketCap: "45.6B",
  },
  {
    logo: "/images/brand/brand-03.svg",
    company: "Apple",
    symbol: "AAPL",
    price: "145.11",
    change: "+2.11%",
    volume: "5.8M",
    marketCap: "2.4T",
  },
  {
    logo: "/images/brand/brand-05.svg",
    company: "Facebook",
    symbol: "FB",
    price: "326.15",
    change: "-0.5%",
    volume: "3.9M",
    marketCap: "900B",
  },
  {
    logo: "/images/brand/brand-04.svg",
    company: "Amazon",
    symbol: "AMZN",
    price: "3,342.88",
    change: "+0.78%",
    volume: "2.1M",
    marketCap: "1.7T",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-gray p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Stocks
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Company
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Change
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Volume
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Market Cap
            </h5>
          </div>
        </div>

        {stockData.map((stock, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === stockData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={stock.logo} alt={stock.company} width={48} height={48} />
              </div>
              <p className="text-black dark:text-white">{stock.company} ({stock.symbol})</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">${stock.price}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className={`text-black dark:text-white ${stock.change.includes('+') ? 'text-success' : 'text-danger'}`}>{stock.change}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{stock.volume}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{stock.marketCap}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
