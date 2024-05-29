import React, { useEffect, useRef, useState } from "react";
import useColorMode from "../../hooks/useColorMode";

function TradingViewWidget() {
  const containerRef = useRef(null);
  const [colorMode] = useColorMode();
  const [widgetConfig, setWidgetConfig] = useState(null);

  useEffect(() => {
    if (!containerRef.current.querySelector("script")) {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"],
        ["Tesla", "TSLA|1D"],
        ["Santander", "SAN|1D"],
      ],
      chartOnly: false,
      width: "100%",
      height: "350",
      locale: "es",
      colorTheme: colorMode === "dark" ? "dark" : "light",
      autosize: false,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
    });

    //containerRef.current.innerHTML = ""; // Clear container
    containerRef.current.appendChild(script);
  }

    //  setWidgetConfig(script.innerHTML);
  }, [colorMode]);

  useEffect(() => {
    if (widgetConfig) {
      // Update colorTheme property when widgetConfig changes
      const config = JSON.parse(widgetConfig);
      config.colorTheme = colorMode === "dark" ? "dark" : "light";
      setWidgetConfig(JSON.stringify(config));
    }
  }, [widgetConfig, colorMode]);

  return (
    <div className=" xs:h-100 col-span-12 rounded-sm border border-stroke bg-gray px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:h-100 md:h-100 xl:col-span-7">
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}

export default TradingViewWidget;
