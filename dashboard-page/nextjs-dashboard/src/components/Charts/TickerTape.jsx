import React, {useEffect, useRef} from "react";

const TickerTape = () => {
    const container = useRef();

    useEffect(() =>{
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true; 
        script.innerHTML = JSON.stringify({
            symbols: [
                {
                  "proName": "BITSTAMP:BTCUSD",
                  "title": "Bitcoin"
                },
                {
                  "proName": "BITSTAMP:ETHUSD",
                  "title": "Ethereum"
                },
                {
                  "description": "Tesla",
                  "proName": "NASDAQ:TSLA"
                },
                {
                  "description": "Nvidia",
                  "proName": "NASDAQ:NVDA"
                },
                {
                  "description": "Apple",
                  "proName": "NASDAQ:AAPL"
                },
                {
                  "description": "Google",
                  "proName": "NASDAQ:GOOG"
                },
                {
                  "description": "Microsoft",
                  "proName": "NASDAQ:MSFT"
                },
                {
                  "description": "Amazon",
                  "proName": "NASDAQ:AMZN"
                },
                {
                  "description": "Meta",
                  "proName": "NASDAQ:META"
                },
                {
                  "description": "Netflix",
                  "proName": "NASDAQ:NFLX"
                },
                {
                  "description": "Nike",
                  "proName": "NYSE:NKE"
                },
                {
                  "description": "McDonald's",
                  "proName": "NYSE:MCD"
                }
              ],
              showSymbolLogo: true,
              isTransparent: false,
              displayMode: "adaptive",
              colorTheme: "light",
              locale: "es",
              height: "100%",
              width: "100%"
        });

        /* container.current.appenChild(script);

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

    },
    []
    );

    return (
        <div className="col-span-12 mb-7.5 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
             <div className="tradingview-widget-container" ref={container}></div>
        </div>
      );

}

export default TickerTape;