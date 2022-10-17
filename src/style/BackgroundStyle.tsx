import styled from "styled-components";

export const BackgroundDiv = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`;
