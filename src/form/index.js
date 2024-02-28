import { useState } from "react";

import { Result, ResultPLN } from "../Result";
import { useRatesData } from "../Currencies/useRatesData";
import {
  FormStyled,
  FieldsetStyled,
  SpanStyled,
  LegendStyled,
  ButtonStyled,
} from "./styled";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.data[currency];

    setResult({
      sourceAmount: amount,
      targetAmount: amount / rate,
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
              {Object.keys(ratesData.data).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
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
// export const FormPLN = ({
//   calculateResultPLN,

//   resultPLN,
// }) => {
//   const [currency, setCurrency] = useState(currencies[0].short);

//   const [amount, setAmountPLN] = useState("");

//   const onSubmit = (event) => {
//     event.preventDefault();
//     calculateResultPLN(currency, amount);
//   };

//   return (
//     <FormStyled onSubmit={onSubmit}>
//       <FieldsetStyled>
//         <LegendStyled> Przelicznik waluty na złotówkę </LegendStyled>
//         <p>
//           <label>
//             <SpanStyled>Podaj kwotę : </SpanStyled>
//             <input
//               value={amount}
//               onChange={({ target }) => setAmountPLN(target.value)}
//               type="number"
//               requiered
//               step="0.01"
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             <SpanStyled>Wybierz walutę :</SpanStyled>
//             <select
//               value={currency}
//               onChange={({ target }) => setCurrency(target.value)}
//             >
//               {currencies.map((currency) => (
//                 <option key={currency.short} value={currency.short}>
//                   {currency.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </p>
//         <p>
//           <ButtonStyled>Przelicz</ButtonStyled>
//         </p>
//         <ResultPLN resultPLN={resultPLN} />
//       </FieldsetStyled>
//     </FormStyled>
//   );
// };
