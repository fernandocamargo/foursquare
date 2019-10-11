import React, { useState, useCallback } from 'react';

import { getRecommendations } from 'services';
import { Poll, Search } from 'components/widgets';

const EMPTY_VENUES = [];

const EMPTY_PARTICIPANTS = new Map();

export default ({ className }) => {
  const [loading, setLoading] = useState(false);
  const [venues, setVenues] = useState(EMPTY_VENUES);
  const [participants, setParticipants] = useState(EMPTY_PARTICIPANTS);
  const [error, setError] = useState(null);
  const onSearch = useCallback(geocode => {
    setLoading(true);
    setVenues(EMPTY_VENUES);
    setParticipants(EMPTY_PARTICIPANTS);
    setError(null);
    getRecommendations({ near: geocode })
      .then(setVenues)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={className}>
      <h1>Lunchplace</h1>
      <Search loading={loading} onSearch={onSearch} />
      <Poll
        venues={venues}
        participants={participants}
        setParticipants={setParticipants}
      />
      {error && (
        <dl className="error">
          <dt>Error</dt>
          <dd>{error}</dd>
        </dl>
      )}
    </main>
  );
};
