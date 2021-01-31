import { useLayoutEffect, useRef } from "react";
import "./App.css";

export default function TapeWidget() {
  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
  script.async = true;
  script.innerHTML = `{
    "symbols": [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "S&P 500"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "BTC/USD"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "ETH/USD"
      },
      {
        "description": "Square Inc.",
        "proName": "SQ"
      },
      {
        "description": "Twillio Inc.",
        "proName": "NYSE:TWLO"
      },
      {
        "description": "Visa",
        "proName": "NYSE:V"
      },
      {
        "description": "Mastercard",
        "proName": "NYSE:MA"
      },
      {
        "description": "Paypal",
        "proName": "NASDAQ:PYPL"
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "dark",
    "isTransparent": true,
    "displayMode": "regular",
    "locale": "en"
  }`;

  const widget = useRef();

  useLayoutEffect(() => {
    widget.current.appendChild(script);
  }, []);

  return (
    <>
      <div className="tradingview-widget-container tape" ref={widget}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </>
  );
}
