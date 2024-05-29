import React, { useEffect, useRef } from "react";
import useColorMode from "../../hooks/useColorMode";

const StockNews = () => {
  const containerRef = useRef();
  const [colorMode] = useColorMode();

  useEffect(() => {
    if (!containerRef.current.querySelector("script")) {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "500",
      market: "stock",
      colorTheme: colorMode === "dark" ? "dark" : "light", // Update colorTheme based on colorMode
      locale: "es",
      feedmode: "market",
      isTransparent: false,
      displayMode: "regular",
    });

    //containerRef.current.innerHTML = ""; // Clear container
    containerRef.current.appendChild(script);
  }

    // Clean up
    /* return () => {
      if (containerRef.current && script) {
        containerRef.current.removeChild(script);
      }
    }; */
  }, [colorMode]);

  return (
    <div className="s:h-100 col-span-12 border border-stroke bg-gray px-5 py-6 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default StockNews;
