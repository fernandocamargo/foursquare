import styled from 'styled-components';

export default component => styled(component)`
  display: flex;

  legend,
  label {
    display: none;
  }

  div {
    align-items: center;
    display: flex;

    & > *:not(:first-child) {
      margin-left: 1rem;
    }
  }

  input[type='text'] {
    ${({ theme }) => theme.input()};
    width: 200px;
  }

  button {
    ${({ theme }) => theme.button()};
  }
`;
