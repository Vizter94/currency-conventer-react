import { useState, useEffect } from "react";
import { useRatesData } from "../Currencies/useRatesData";
import { DateStyled, ContainerStyled } from "./styled";

const format = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

export const AppDate = () => {
  const [ratesDate, setRatesDate] = useState(new Date());
  const ratesData = useRatesData();

  useEffect(() => {
    if (ratesData.state === "success") {
      setRatesDate(new Date(ratesData.date));
    }
  }, [ratesData]);

  const formDate = ratesDate.toLocaleDateString(undefined, format);

  return (
    <ContainerStyled>
      <DateStyled>
        Kurs z dnia:<strong> {formDate}</strong>{" "}
      </DateStyled>
    </ContainerStyled>
  );
};
