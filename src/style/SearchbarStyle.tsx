import styled from "styled-components";
import { buttonStyle } from "./Theme";

export const InputText = styled.input`
  height: 35px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 18px;

  &:focus {
    box-shadow: 0px 0px 2px ${({ theme }) => theme.blue};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 30px;
    width: 40%;
    max-width: 250px;
  }
`;
export const InputButton = styled.input`
  height: 60px;
  width: 100px;
  margin-top: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 20px;
  ${buttonStyle}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 1px;
    height: 55px;
    width: 20%;
    font-size: 20px;
    max-width: 100px;
  }
`;
