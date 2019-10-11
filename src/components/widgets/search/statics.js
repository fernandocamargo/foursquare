import { string, func, bool } from 'prop-types';

export const displayName = 'Search';

export const propTypes = {
  className: string.isRequired,
  onSearch: func.isRequired,
  loading: bool,
};

export const defaultProps = {
  loading: false,
};
