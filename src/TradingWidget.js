import { useLayoutEffect, useRef } from "react";
import "./App.css";

export default function TradingWidget() {
  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
  script.async = true;
  script.innerHTML = `{
    "colorTheme": "dark",
    "dateRange": "12M",
    "showChart": true,
    "locale": "en",
    "width": "100%",
    "height": "100%",
    "largeChartUrl": "",
    "isTransparent": true,
    "showSymbolLogo": true,
    "plotLineColorGrowing": "rgba(0, 255, 0, 1)",
    "plotLineColorFalling": "rgba(255, 0, 0, 1)",
    "gridLineColor": "rgba(182, 182, 182, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
    "tabs": [
      {
        "title": "Indices",
        "symbols": [
          {
            "s": "NYSE:SQ",
            "d": "Square Inc."
          },
          {
            "s": "NYSE:TWLO",
            "d": "Twillio Inc."
          },
          {
            "s": "NYSE:V",
            "d": "Visa"
          },
          {
            "s": "NYSE:MA",
            "d": "Mastercard"
          },
          {
            "s": "PYPL",
            "d": "Paypal Holdings, Inc."
          },
          {
            "s": "AMEX:SPY",
            "d": "S&P 500"
          }
        ],
        "originalTitle": "Indices"
      },
      {
        "title": "Commodities",
        "symbols": [
          {
            "s": "CME_MINI:ES1!",
            "d": "S&P 500"
          },
          {
            "s": "CME:6E1!",
            "d": "Euro"
          },
          {
            "s": "COMEX:GC1!",
            "d": "Gold"
          },
          {
            "s": "NYMEX:CL1!",
            "d": "Crude Oil"
          },
          {
            "s": "NYMEX:NG1!",
            "d": "Natural Gas"
          },
          {
            "s": "CBOT:ZC1!",
            "d": "Corn"
          }
        ],
        "originalTitle": "Commodities"
      },
      {
        "title": "Bonds",
        "symbols": [
          {
            "s": "CME:GE1!",
            "d": "Eurodollar"
          },
          {
            "s": "CBOT:ZB1!",
            "d": "T-Bond"
          },
          {
            "s": "CBOT:UB1!",
            "d": "Ultra T-Bond"
          },
          {
            "s": "EUREX:FGBL1!",
            "d": "Euro Bund"
          },
          {
            "s": "EUREX:FBTP1!",
            "d": "Euro BTP"
          },
          {
            "s": "EUREX:FGBM1!",
            "d": "Euro BOBL"
          }
        ],
        "originalTitle": "Bonds"
      },
      {
        "title": "Forex",
        "symbols": [
          {
            "s": "FX:EURUSD"
          },
          {
            "s": "FX:GBPUSD"
          },
          {
            "s": "FX:USDJPY"
          },
          {
            "s": "FX:USDCHF"
          },
          {
            "s": "FX:AUDUSD"
          },
          {
            "s": "FX:USDCAD"
          }
        ],
        "originalTitle": "Forex"
      }
    ]
  }`;

  const widget = useRef();

  useLayoutEffect(() => {
    widget.current.appendChild(script);
  }, []);

  return (
    <>
      <div className="tradingview-widget-container trading" ref={widget}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </>
  );
}
