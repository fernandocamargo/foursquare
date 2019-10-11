import styled from 'styled-components';

export default component => styled(component)`
  margin: 2rem 0;
  width: 75vw;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  h1 {
    color: #242424;
    font-size: 2rem;
  }

  dl.error {
    background-color: #fcea9c;
    border: solid 1px #823329;
    font-size: 0.85rem;
    padding: 0.5rem;

    dt {
      color: #823329;
      font-weight: bold;
    }
  }
`;
