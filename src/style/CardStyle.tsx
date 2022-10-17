import styled from "styled-components";

export const CardImg = styled.img`
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
    margin-top: 30px;
  }
`;

export const CardDiv = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.grey};
  border-radius: 5px;
  overflow: hidden;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.color7};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }

  h5 {
    margin: 10px;
  }
`;

export const PriceImg = styled.img<{ display: string }>`
  width: 15px;
  vertical-align: -15%;
  display: ${(props) => props.display};
`;
