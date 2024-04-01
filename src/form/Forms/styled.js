import styled from "styled-components";

export const FormStyled = styled.form`
  margin: auto;
  max-width: 500px;
`;

export const FieldsetStyled = styled.fieldset`
  background-color: #48d3a6;
  border: 3px solid rgb(250, 252, 255);
  border-radius: 15px;
  box-shadow: 1px 1px 50px 20px rgb(213 144 144);
  padding: 25px;
  margin: 10px;
`;

export const SpanStyled = styled.span`
  width: 200px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const LegendStyled = styled.legend`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
`;

export const ButtonStyled = styled.button`
  color: rgb(37, 14, 14);
  background-color: #fdc287;
  border: outset #ffa242;
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  font-weight: bold;
`;

export const InputStyled = styled.input`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: darkblue;
  padding: 10px;
`;
export const LoadingStyled = styled.p`
  color: darkblue;
`;

export const FailureStyled = styled.p`
  font-size: large;
  font-weight: bold;
  color: darkred;
`;

export const ContainerStyled = styled.div`
  min-height: 300px;
`;
