import React, { useEffect, useRef } from "react";

const Screener = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%", 
      height: "100%", 
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "dark",
      locale: "es",
    });

    containerRef.current.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonta
      containerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="col-span-12 rounded-sm  border-stroke bg-white px-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:h-100 md:h-100 sm:px-7.5 xl:col-span-5">
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
