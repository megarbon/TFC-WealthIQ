import React, { useEffect, useRef, memo } from "react";
import useColorMode from "../../hooks/useColorMode";

function TradingViewWidget() {
  const container = useRef();
  const [colorMode] = useColorMode();

  useEffect(() => {
    if (!container.current.querySelector("script")) {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      exchanges: [],
      dataSource: "SPX500",
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      locale: "es",
      symbolUrl: "",
      colorTheme: colorMode === "dark" ? "dark" : "light", // Update colorTheme based on colorMode
      hasTopBar: true,
      isDataSetEnabled: true,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      width: "100%",
      height: "500",
    });

    //container.current.innerHTML = ""; // Clear container
    container.current.appendChild(script);
  }
    // Clean up
    /* return () => {
      if (container.current && script) {
        container.current.removeChild(script);
      }
    }; */
  }, [colorMode]);

  return (
    <div className=" col-span-12 rounded-sm border border-stroke bg-gray px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="tradingview-widget-container" ref={container}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
