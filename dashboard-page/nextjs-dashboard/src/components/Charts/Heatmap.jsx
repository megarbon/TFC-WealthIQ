// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
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
        colorTheme: "dark",
        hasTopBar: true,
        isDataSetEnabled: true,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
        width: "100%", 
        height: "100%" 
      });
      container.current.appendChild(script);

      return () => {
        // Limpiar el script cuando el componente se desmonta
        container.current.removeChild(script);
      };

    },
    []
  );

  return (
    <div className="h-100 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
         <div className="h-100 tradingview-widget-container" ref={container}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
