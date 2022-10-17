import styled from "styled-components";

export const Flex = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
