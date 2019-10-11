import styled from 'styled-components';

import { Venue, Participant } from 'components/elements';

export default component => styled(component)`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 25px 50px -25px rgba(0, 0, 0, 0.25);
  position: relative;

  div.venues {
    display: flex;
    justify-content: flex-end;
  }

  form {
    clear: both;
    display: block;
    position: relative;
  }

  legend {
    bottom: calc(100% + 1rem);
    color: #c2c2c2;
    font-size: 0.8rem;
    left: 1rem;
    position: absolute;
  }

  button {
    ${({ theme }) => theme.button()};
    position: absolute;
    top: calc(100% + 2rem);
  }

  ${Venue} {
    border-left: solid 1px #ededed;
    width: calc((75% / 3) - 1px);

    &:last-of-type {
      border-radius: 0 5px 0 0;
    }
  }

  ${Participant} {
    &:last-of-type {
      border-radius: 0 0 5px 0;
    }
  }
`;
