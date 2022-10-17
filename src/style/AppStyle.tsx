import styled, { createGlobalStyle } from "styled-components";

export const AppStyle = createGlobalStyle`
    body {
    margin: 0;
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    div {
        width: 100%
    }
`;

export const ComponentSetter = styled.div`
  display: flex;
  min-height: calc(100vh - 40px);
  flex-direction: column;
`;
