import styled from 'styled-components';

export default component => styled(component)`
  background-color: ${({ winner }) => (winner ? '#f3f4e3' : 'transparent')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;

  dl {
    margin: 0 3rem;
    text-align: center;

    &.name {
      a {
        ${({ theme }) => theme.link()};

        &:after {
          color: #bac55b;
          content: '\\e876';
          display: ${({ winner }) => (winner ? 'inherit' : 'none')};
          font-family: ${({ theme }) => theme.typography.icon};
          font-size: 2rem;
          left: calc(100% + 0.5rem);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    &.category {
      color: #bbbbbb;
      font-size: 1rem;
    }

    &.rating {
      font-size: 1.1rem;
      font-weight: bold;
      padding: 1rem 0;
    }
  }

  dt {
    display: none;
  }
`;
