// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
        script.innerHTML = JSON.stringify({
          symbols: [
            ["Apple","AAPL|1D"],
            ["Google","GOOGL|1D"],
            ["Microsoft","MSFT|1D"],
            ["Tesla","TSLA|1D"]
          ],
          chartOnly: false,
          width: "100%", 
          height: "100%", 
          locale: "es",
          colorTheme: "light",
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
          dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"]
        });
    /* container.current.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonta
      container.current.removeChild(script);
    }; */

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

    <div className=" col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xs:h-100 sm:h-100 md:h-100 xl:col-span-7">
      <div className="tradingview-widget-container" ref={container}  style={{ width: '100%', height: '100%' }}>
    </div></div>
    
  );
}

export default memo(TradingViewWidget);
