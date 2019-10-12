import { string, arrayOf, shape, func } from 'prop-types';

import { omit } from 'helpers';
import { propTypes as Venue } from 'components/elements/venue/statics';

export const displayName = 'Participant';

export const propTypes = {
  className: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  vote: string.isRequired,
  venues: arrayOf(shape(omit(Venue, 'className'))).isRequired,
  onIdentify: func.isRequired,
  onVote: func.isRequired,
};

export const defaultProps = {};
