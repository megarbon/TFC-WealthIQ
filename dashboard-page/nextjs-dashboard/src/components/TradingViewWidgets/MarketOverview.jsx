import React, { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "100%",
        "height": "100%",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(42, 46, 57, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              {
                "s": "FOREXCOM:SPXUSD",
                "d": "S&P 500 Index"
              },
              {
                "s": "FOREXCOM:NSXUSD",
                "d": "US 100 Cash CFD"
              },
              {
                "s": "FOREXCOM:DJI",
                "d": "Dow Jones Industrial Average Index"
              },
              {
                "s": "INDEX:NKY",
                "d": "Nikkei 225"
              },
              {
                "s": "INDEX:DEU40",
                "d": "DAX Index"
              },
              {
                "s": "FOREXCOM:UKXGBP",
                "d": "FTSE 100 Index"
              }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Forex",
            "symbols": [
              {
                "s": "FX:EURUSD",
                "d": "EUR to USD"
              },
              {
                "s": "FX:GBPUSD",
                "d": "GBP to USD"
              },
              {
                "s": "FX:USDJPY",
                "d": "USD to JPY"
              },
              {
                "s": "FX:USDCHF",
                "d": "USD to CHF"
              },
              {
                "s": "FX:AUDUSD",
                "d": "AUD to USD"
              },
              {
                "s": "FX:USDCAD",
                "d": "USD to CAD"
              }
            ],
            "originalTitle": "Forex"
          }
        ]
      }
    `;
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);

    return () => {
      document
        .querySelector(".tradingview-widget-container__widget")
        .removeChild(script);
    };
  }, []);

  return (
    <div>
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
      >
        <span className="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  );
};

export default TradingViewWidget;
