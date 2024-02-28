import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "load",
  });

  useEffect(() => {
    const response = axios.get(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_tysutrn0DH48eqpwuA2fz0lNiik7Tbq9XC2koCeM&currencies=EUR%2CUSD%2CCAD%2CNOK&base_currency=PLN"
    );

    const { data, meta } = response.json();

    setRatesData({
      state: "success",
      data,
      meta,
    });
  });
  return ratesData;
};
