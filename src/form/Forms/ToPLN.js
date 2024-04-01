import { useState } from "react";
import { ResultPLN } from "../Result";
import { useRatesData } from "../Currencies/useRatesData";
import {
  FormStyled,
  FieldsetStyled,
  SpanStyled,
  LegendStyled,
  ButtonStyled,
  InputStyled,
  ContainerStyled,
  LoadingStyled,
  FailureStyled,
} from "./styled";

export const OthersToPLN = () => {
  const [resultPLN, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency].value;

    setResult({
      targetAmountPLN: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <FieldsetStyled>
        <LegendStyled>Kantor Walut na Złotówki</LegendStyled>
        {ratesData.state === "loading" ? (
          <ContainerStyled>
            <LoadingStyled>
              Trwa ładowanie Kalkulatora z innych walut na złotówki .....
            </LoadingStyled>
          </ContainerStyled>
        ) : ratesData.state === "error" ? (
          <ContainerStyled>
            <FailureStyled>
              BŁĄD
              <br />
              Wystąpił Błąd !!! Prawdopodobnie problem z pobieraniem danych.
              Spróbuj później.
            </FailureStyled>
          </ContainerStyled>
        ) : (
          <ContainerStyled>
            <p>
              <SpanStyled>Wybierz Walutę :</SpanStyled>
              <InputStyled
                as="select"
                name="currency"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </InputStyled>
            </p>
            <p>
              <SpanStyled>Podaj Kwotę w Wybranej Walucie :</SpanStyled>
              <InputStyled
                name="currency"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                type="number"
                step="0.01"
                min="0.01"
                required
              />{" "}
            </p>
            <p>
              <ButtonStyled>Przelicz!</ButtonStyled>
            </p>

            <ResultPLN resultPLN={resultPLN} />
          </ContainerStyled>
        )}
      </FieldsetStyled>
    </FormStyled>
  );
};
