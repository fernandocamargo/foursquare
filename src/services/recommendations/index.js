import { foursquare } from 'clients';
import { getVenueBy } from 'services';

export default ({ near }) =>
  foursquare('search/recommendations', {
    intent: 'lunch',
    limit: 3,
    near,
  }).then(({ response: { group: { results } } }) =>
    Promise.all(results.map(({ venue: { id } }) => getVenueBy(id)))
  );
