import styled from "styled-components";
import { buttonStyle } from "./Theme";

export const LeftHeader = styled.div`
  margin: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 10px auto auto auto;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 85px;
`;

export const RightHeader = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export const Button = styled.button`
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 25px;
  ${buttonStyle}
`;

export const HeaderList = styled.li`
  display: block;
  list-style-type: none;
  font-size: 25px;
  font-weight: bold;
  margin: 20px 30px auto 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color2};
    &:hover {
      color: ${({ theme }) => theme.color3};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 10px;
  }
`;

export const ButtonList = styled.li`
  list-style-type: none;
  margin: 15px 30px auto 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    text-align: center;
  }
`;
