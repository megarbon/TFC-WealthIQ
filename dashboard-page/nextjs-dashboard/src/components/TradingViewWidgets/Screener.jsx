import React, { useEffect, useRef, useState } from "react";
import useColorMode from "../../hooks/useColorMode";

const Screener = () => {
  const containerRef = useRef();
  const [colorMode] = useColorMode();
  const [widgetConfig, setWidgetConfig] = useState(null);

  useEffect(() => {
    if (!containerRef.current.querySelector("script")) {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "350",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "stock",
      showToolbar: true,
      colorTheme: colorMode === "dark" ? "dark" : "light", // Update colorTheme based on colorMode
      locale: "es",
    });

    //containerRef.current.innerHTML = ""; // Clear container
    containerRef.current.appendChild(script);
  }

    //setWidgetConfig(script.innerHTML);
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
    <div className="col-span-12 rounded-sm border border-stroke bg-gray px-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:h-100 sm:px-7.5 md:h-100 xl:col-span-5">
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </div>
  );
};

export default Screener;
