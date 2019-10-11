import React from 'react';

import { Participant, Venue } from 'components/elements';

import { getStatsFrom } from './helpers';
import { create, identify, vote } from './reducers';

export default ({ className, venues, participants, setParticipants }) => {
  const { winner } = getStatsFrom(participants);
  const addParticipant = event => {
    event.preventDefault();
    setParticipants(create());
  };
  const renderVenue = venue => (
    <Venue key={venue.id} winner={venue.id === winner} {...venue} />
  );
  const renderParticipant = ([id, participant]) => (
    <Participant
      key={id}
      id={id}
      venues={venues}
      onIdentify={name => setParticipants(identify({ id, name }))}
      onVote={venue => setParticipants(vote({ id, venue }))}
      {...participant}
    />
  );

  return (
    !!venues.length && (
      <section className={className}>
        <div className="venues">{venues.map(renderVenue)}</div>
        <form onSubmit={addParticipant}>
          <fieldset>
            {!!participants.size && <legend>Participants</legend>}
            {Array.from(participants).map(renderParticipant)}
            <button type="submit">Add participant</button>
          </fieldset>
        </form>
      </section>
    )
  );
};
