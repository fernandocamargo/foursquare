import { string, arrayOf, shape, instanceOf, func } from 'prop-types';

import { omit } from 'helpers';
import { propTypes as Venue } from 'components/elements/venue/statics';

export const displayName = 'Poll';

export const propTypes = {
  className: string.isRequired,
  venues: arrayOf(shape(omit(Venue, 'className'))).isRequired,
  participants: instanceOf(Map).isRequired,
  setParticipants: func.isRequired,
};

export const defaultProps = {};
