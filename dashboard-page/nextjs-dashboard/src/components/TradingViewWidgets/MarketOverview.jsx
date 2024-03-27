import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
    const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      showChart: true,
      locale: "es",
      largeChartURL: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "100%",
      height: "400",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      colorTheme: "light",
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
        
    })

   
    if (container.current) {
      container.current.appendChild(script);
    }
  
    // Devolver una función de limpieza
    return () => {
      // Verificar que container.current y script existan antes de intentar eliminar el script
      if (container.current && script) {
        container.current.removeChild(script);
      }
    }; 


  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="sm:h-100"><div>
      <div className="" ref={container}></div>
      </div>
    </div>
    </div>
    
  );
};

export default TradingViewWidget;
