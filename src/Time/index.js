import { useState, useEffect } from "react";
import { ContainerStyled, TimeStyled } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Time = () => {
  const date = useCurrentDate();

  return (
    <ContainerStyled>
      <TimeStyled>
        Aktualny czas:
        {date.toLocaleString(undefined, {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          day: "numeric",
          month: "long",
        })}
      </TimeStyled>
    </ContainerStyled>
  );
};
