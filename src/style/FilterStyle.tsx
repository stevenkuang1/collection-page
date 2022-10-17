import styled from "styled-components";

export const FilterDiv = styled.div<{ show: boolean }>`
  width: 40%;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  overflow-x: hidden;
  text-align: left;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.grey};
  display: ${(props) => (props.show ? "block" : "none")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 20px auto;
    text-align: left;
  }
`;

export const AttributeText = styled.h1`
  text-align: center;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color6};
`;
