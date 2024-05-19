import React, { useEffect, useRef } from "react";
import useColorMode from "../../hooks/useColorMode";

const TradingViewWidget = () => {
  const container = useRef();
  const [colorMode] = useColorMode();

  useEffect(() => {
    if (!container.current.querySelector("script")) {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      dateRange: "12M",
      showChart: true,
      locale: "es",
      largeChartURL: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "500",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      colorTheme: colorMode === "dark" ? "dark" : "light", // Update colorTheme based on colorMode
      dateRange: "12M",
      showChart: true,
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(106, 109, 120, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      title: "Indices",
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
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
      <div className="">
        <div>
          <div className="" ref={container}></div>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
