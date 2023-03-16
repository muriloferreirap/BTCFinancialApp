import React from "react";
import BitcoinTicker from "./components/BitcoinTicker";
import "./App.css";

const App = () => {
  return (
    <div className="container-app">
      <BitcoinTicker
        title="Bitcoin-BRL"
        rate="brl"
        locale="pt-br"
        currency="BRL"
      />

      <BitcoinTicker
        title="Bitcoin-USD"
        rate="usd"
        locale="en"
        currency="USD"
      />

      <BitcoinTicker
        title="Bitcoin-EUR"
        rate="eur"
        locale="eur"
        currency="EUR"
      />
    </div>
  );
};

export default App;
