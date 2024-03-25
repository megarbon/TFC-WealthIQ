import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget() {
  const container = useRef();
  const [isScriptAppended, setIsScriptAppended] = useState(false);

  useEffect(() => {
    if (!isScriptAppended) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "defaultScreen": "general",
        "market": "forex",
        "showToolbar": true,
        "colorTheme": "dark",
        "locale": "en"
      }`;
      container.current.appendChild(script);
      setIsScriptAppended(true);
    }
  }, [isScriptAppended]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="tradingview-widget-container flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="tradingview-widget" ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
