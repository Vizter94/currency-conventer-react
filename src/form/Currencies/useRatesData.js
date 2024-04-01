import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fatchRates = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_iIl39QSdy9F7HKeemn8SQ5z5snFNu28qmkypSCE4&currencies=&base_currency=PLN"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { data, meta } = await response.json();

        setRatesData({
          state: "success",
          rates: data,
          date: meta.last_updated_at,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fatchRates, 2000);
  }, []);
  return ratesData;
};
