import { css } from "styled-components";

export const theme = {
  color1: "#177E89",
  color2: "#FFC857",
  color3: "#DB3A34",
  color4: "#ED8146",
  color5: "#FBB753",
  color6: "#6E8A8F",
  color7: "#B8DBD9",
  white: "#ffffff",
  black: "#000000",
  grey: "#F4F4F9",
  focus: "#0066ff",
  mobile: "1023px",
  smobile: "374px",
  maxWidth: "2000px",
};

export const buttonStyle = css<{ primaryColor: string; secondayColor: string }>`
  color: ${({ theme }) => theme.white};
  border: 2px solid ${(props) => props.primaryColor};
  background-color: ${(props) => props.primaryColor};

  &:hover {
    color: ${(props) => props.primaryColor};
    background-color: ${(props) => props.secondayColor};
    border-color: ${(props) => props.secondayColor};
    cursor: pointer;
  }
`;
