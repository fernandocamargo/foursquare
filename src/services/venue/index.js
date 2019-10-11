import { foursquare } from 'clients';

export default id =>
  foursquare(`venues/${id}`).then(
    ({
      response: {
        venue: {
          categories = [{ name: 'Uncategorized' }],
          url,
          canonicalUrl,
          ...venue
        },
      },
    }) => {
      const [{ name: category }] = categories;
      const website = url || canonicalUrl;

      return { category, website, ...venue };
    }
  );
