import { queryfy, toJSON } from './helpers';

const API = 'https://api.foursquare.com/v2';

const CLIENT_ID = 'VB5QG0RY4HQ32GFZ30QKBP3UEGQK02SFMY0BQ0M1HKSXP4UW';

const CLIENT_SECRET = 'TQU5OE2GHWAIYP5PXH2G5D5BLSPRPACCFOFYJGMEEAZXAOU0';

export default (path, options) => {
  const version = new Date().getTime();
  const params = queryfy({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    v: version,
    ...options,
  });
  const url = `${API}/${path}?${params}`;

  return window
    .fetch(url)
    .then(toJSON)
    .then(response => {
      const {
        meta: { errorDetail },
      } = response;

      return errorDetail ? Promise.reject(errorDetail) : response;
    });
};
