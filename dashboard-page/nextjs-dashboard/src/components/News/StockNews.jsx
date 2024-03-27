import React, {useEffect, useRef} from "react";

const StockNews = () => {
    const container = useRef();
  
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%", 
        height: "520",
        market: "stock",
        colorTheme: "light",
        locale: "es",
        feedmode: "market",
        isTransparent: false,
        displayMode: "regular",
      });
  
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
        <div className="col-span-12 s:h-100 border border-stroke bg-white px-5 pt-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div
          className="tradingview-widget-container"
          ref={container} 
          style={{ width: "100%", height: "100%" }} 
            >
        </div>
        </div>

      );
    };
    
    export default StockNews;