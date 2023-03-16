import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInterval } from "use-interval";
import "./BitcoinTicker.css";

const BitcoinTicker = (props: any) => {
  const [buy, setBuy] = useState(0);

  const fetchTicker = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/exchange_rates/"
    );
    setBuy(response.data.rates[props.rate].value);
  };

  useEffect(() => {
    fetchTicker();
  }, []);

  useInterval(() => {
    fetchTicker();
  }, 10000);

  return (
    <div className="container">
      <h1 className="title">{props.title}</h1>
      <p className="buy-price">
        {buy.toLocaleString(props.locale, {
          style: "currency",
          currency: props.currency,
        })}
      </p>
    </div>
  );
};

export default BitcoinTicker;
