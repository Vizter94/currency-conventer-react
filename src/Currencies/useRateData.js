import { useEffect, useState } from "react";

export const useRateData = () => {
  const [ratesData, setRates] = useState({
    state: "load",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_tysutrn0DH48eqpwuA2fz0lNiik7Tbq9XC2koCeM&currencies=EUR%2CUSD%2CNOK%2CCHF&base_currency=PLN"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { rates, date } = await response.json();

        setRates({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRates({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 1500);
  }, []);
  return ratesData;
};
