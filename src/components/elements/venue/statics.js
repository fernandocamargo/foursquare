import { string, number } from 'prop-types';

export const displayName = 'Venue';

export const propTypes = {
  className: string.isRequired,
  name: string.isRequired,
  website: string.isRequired,
  category: string.isRequired,
  rating: number.isRequired,
};

export const defaultProps = {};
