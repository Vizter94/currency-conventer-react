import { useState } from "react";
import { Form, FormPLN } from "./Form";
import { useRateData } from "./Currencies/useRateData";
import { currencies } from "./Currencies";
import { Time } from "./Time";
import "./index.css";

function App() {
  const [result, setResult] = useState();
  const [resultPLN, setResultPLN] = useState();

  const ratesData = useRateData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: amount,
      targetAmount: amount / rate,
      currency,
    });
  };
  const calculateResultPLN = (currency, amountPLN) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResultPLN({
      sourceAmountPLN: +amountPLN,
      targetAmountPLN: amountPLN * rate,
      currency,
    });
  };
  return (
    <div className="app">
      <Time />
      <Form result={result} calculateResult={calculateResult} />
      <FormPLN resultPLN={resultPLN} calculateResultPLN={calculateResultPLN} />
    </div>
  );
}

export default App;
