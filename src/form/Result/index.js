import { TextStyled } from "./styled";

export const Result = ({ result }) => (
  <TextStyled>
    Wynik :&nbsp;
    {result !== undefined && (
      <>
        {result.targetAmount.toFixed(2)}&nbsp; {result.currency}
      </>
    )}
  </TextStyled>
);

export const ResultPLN = ({ resultPLN }) => (
  <TextStyled>
    Wynik :&nbsp;
    {resultPLN !== undefined && (
      <>{resultPLN.targetAmountPLN.toFixed(2)}&nbsp; PLN</>
    )}
  </TextStyled>
);
