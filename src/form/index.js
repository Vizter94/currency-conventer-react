import { useState } from "react";
import { currencies } from "../CurrencyTab";
import { Result, ResultPLN } from "../result";

import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="fieldset">
        <legend className="header">Przelicznik waluty ze złotówki</legend>
        <p>
          <label>
            <span className="labelText">Podaj kwotę :</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="field"
              type="number"
              requiered
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="labelText">Wybierz walutę :</span>
            <select
              className="field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form_button">Przelicz</button>
        </p>
        <Result result={result} />
      </fieldset>
    </form>
  );
};
export const FormPLN = ({
  calculateResultPLN,

  resultPLN,
}) => {
  const [currency, setCurrency] = useState(currencies[0].short);

  const [amount, setAmountPLN] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResultPLN(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="fieldset">
        <legend className="header"> Przelicznik waluty na złotówkę </legend>
        <p>
          <label>
            <span className="labelText">Podaj kwotę : </span>
            <input
              value={amount}
              onChange={({ target }) => setAmountPLN(target.value)}
              className="field"
              type="number"
              requiered
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="labelText">Wybierz walutę :</span>
            <select
              className="field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form_button">Przelicz</button>
        </p>
        <ResultPLN resultPLN={resultPLN} />
      </fieldset>
    </form>
  );
};
