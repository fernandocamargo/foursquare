import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    min-width: 100vw;
  }

  html {
    background-color: #f7f7f7;
  }

  body {
    display: flex;
    font-family: ${({ theme }) => theme.typography.main};
    font-size: 16px;
    justify-content: center;
  }
`;
