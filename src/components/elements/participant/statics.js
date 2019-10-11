import { string } from 'prop-types';

export const displayName = 'Participant';

export const propTypes = {
  className: string.isRequired,
  name: string,
  vote: string,
};

export const defaultProps = {
  name: '',
  vote: '',
};
