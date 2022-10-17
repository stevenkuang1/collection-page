import styled from "styled-components";

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 17% 17% 17% 17% 17%;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 45% 45%;
    gap: 25px;
    justify-content: center;
  }
`;

export const GridContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const SelectSort = styled.select`
  margin-left: 10px;
  margin-top: 5px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  height: 59px;

  &:focus {
    box-shadow: 0px 0px 2px ${({ theme }) => theme.blue};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 40px;
    width: 40%;
    margin: 10px auto;
  }
`;

export const SearchSort = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  width: 50%;
  margin: 20px 0 20px 50px;
  justify-content: left;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin: 20px auto;
    width: 100%;
  }
`;

export const CompletedLoadingText = styled.h4<{ show: boolean }>`
  display: ${(props) => (props.show ? "inline" : "none")};
`;
