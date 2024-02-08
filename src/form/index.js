import { useState } from "react";
import { currencies } from "../CurrencyTab";
import { Result, ResultPLN } from "../Result";
import {
  FormStyled,
  FieldsetStyled,
  SpanStyled,
  LegendStyled,
  ButtonStyled,
} from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <FieldsetStyled>
        <LegendStyled>Przelicznik waluty ze złotówki</LegendStyled>
        <p>
          <label>
            <SpanStyled>Podaj kwotę :</SpanStyled>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              requiered
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <SpanStyled>Wybierz walutę :</SpanStyled>
            <select
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
          <ButtonStyled>Przelicz</ButtonStyled>
        </p>
        <Result result={result} />
      </FieldsetStyled>
    </FormStyled>
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
    <FormStyled onSubmit={onSubmit}>
      <FieldsetStyled>
        <LegendStyled> Przelicznik waluty na złotówkę </LegendStyled>
        <p>
          <label>
            <SpanStyled>Podaj kwotę : </SpanStyled>
            <input
              value={amount}
              onChange={({ target }) => setAmountPLN(target.value)}
              type="number"
              requiered
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <SpanStyled>Wybierz walutę :</SpanStyled>
            <select
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
          <ButtonStyled>Przelicz</ButtonStyled>
        </p>
        <ResultPLN resultPLN={resultPLN} />
      </FieldsetStyled>
    </FormStyled>
  );
};
