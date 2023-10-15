import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    Wynik :&nbsp;
    {result !== undefined && (
      <>
        <span className="amount">
          {result.targetAmount.toFixed(2)}&nbsp; {result.currency}
        </span>
      </>
    )}
  </p>
);

export const ResultPLN = ({ resultPLN }) => (
  <p className="result">
    Wynik :&nbsp;
    {resultPLN !== undefined && (
      <>
        <span className="amount">
          {resultPLN.targetAmountPLN.toFixed(2)}&nbsp; PLN
        </span>
      </>
    )}
  </p>
);
