import { css } from 'styled-components';

export default {
  typography: {
    main: "'Roboto', sans-serif",
    icon: 'Material Icons',
  },
  link: function() {
    return css`
      color: #655eb9;
      display: inline-block;
      font-size: 1.15rem;
      outline: 0;
      position: relative;
      text-decoration: underline;
      transition: color 0.15s linear;

      &:before {
        background-color: #f15946;
        border-radius: 50%;
        color: #fff;
        content: '\\e89e';
        display: inherit;
        font-family: ${this.typography.icon};
        opacity: 0;
        padding: 0.5rem;
        position: absolute;
        right: calc(100% + 0.5rem);
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.15s linear, z-index 0.15s linear;
        z-index: -1;
      }

      &:focus,
      &:hover {
        color: #f15946;
      }

      &:active:before {
        opacity: 1;
        z-index: 1;
      }
    `;
  },
  control: function() {
    return css`
      font-size: 0.85rem;
      outline: 0;
      padding: 0.75rem;

      &,
      &:before {
        transition: background-color 0.15s linear, border-color 0.15s linear,
          box-shadow 0.15s linear, color 0.15s linear, opacity 0.15s linear,
          padding 0.15s linear;
      }

      &[disabled] {
        opacity: 0.5;
      }
    `;
  },
  input: function() {
    return css`
      ${this.control()};
      border: solid 1px #e4e4e4;
      border-radius: 5px;
      color: #bfbfbf;

      &:focus {
        box-shadow: 0 0 5px #514fae;
        border-color: #514fae;
      }
    `;
  },
  button: function() {
    return css`
      ${this.control()};
      background-color: #514fae;
      border: none;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
      position: relative;
      width: 200px;

      &:before {
        border: double 2px transparent;
        border-radius: 23px;
        content: '';
        display: block;
        height: calc(100% + 2px);
        left: -3px;
        position: absolute;
        top: -3px;
        width: calc(100% + 2px);
      }

      &:focus:before {
        border-color: #514fae;
      }

      &:hover {
        background-color: #f15946;

        &:before {
          border-color: #f15946;
        }
      }

      &:active {
        padding-bottom: 0.5rem;
        padding-top: 1rem;
        box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.2),
          0 2px 2px rgba(0, 0, 0, 0.19);
      }
    `;
  },
};
