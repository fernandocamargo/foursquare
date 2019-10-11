import styled from 'styled-components';

export default component => styled(component)`
  border-top: solid 1px #ededed;
  overflow: hidden;

  &,
  dl,
  dd {
    display: flex;
  }

  dl {
    &.name {
      width: 25%;
    }

    &.venue {
      width: 75%;
    }
  }

  dt {
    display: none;
  }

  dd {
    width: 100%;
  }

  div.option {
    border-left: solid 1px #ededed;
    overflow: hidden;
    position: relative;
    width: calc((100% / 3) - 1px);

    label {
      background-color: #faf6f5;
      cursor: pointer;
      font-size: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: background-color 0.15s linear;
      width: 100%;

      &:after {
        color: transparent;
        content: '\\e876';
        font-family: ${({ theme }) => theme.typography.icon};
        font-size: 2rem;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: color 0.15s linear;
        z-index: 1;
      }
    }
  }

  input[type='text'] {
    ${({ theme }) => theme.input()};
    margin: 0.5rem;
    width: 100%;
  }

  input[type='radio'] {
    &:focus,
    &:hover {
      & + label:after {
        color: #bac55c;
      }
    }

    &:checked + label {
      background-color: #bac55c;

      &:after {
        color: #fff;
      }
    }
  }
`;
