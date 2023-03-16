import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInterval } from "use-interval";
import "./BitcoinTicker.css";

const BitcoinTicker = () => {
  const [buy, setBuy] = useState(0);

  const fetchTicker = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/exchange_rates/"
    );
    setBuy(response.data.rates.brl.value);
  };

  useEffect(() => {
    fetchTicker();
  }, []);

  useInterval(() => {
    fetchTicker();
  }, 5000);

  const formattedValue = buy.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="container">
      <h1 className="title">Preço do Bitcoin</h1>
      <p className="buy-price">{formattedValue}</p>
    </div>
  );
};

export default BitcoinTicker;
