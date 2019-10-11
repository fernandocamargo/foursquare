import React from 'react';

import { useAutoFocus } from 'hooks';

export default ({ className, id, name, vote, venues, onIdentify, onVote }) => {
  const Input = useAutoFocus('input');
  const renderVenue = venue => {
    const option = [venue.id, id].join('@');

    return (
      <div key={venue.id} className="option">
        <input
          type="radio"
          id={option}
          checked={venue.id === vote}
          onChange={() => onVote(venue.id)}
        />
        <label htmlFor={option}>{venue.name}</label>
      </div>
    );
  };

  return (
    <div className={className}>
      <dl className="name">
        <dt>
          <label htmlFor={id}>Name</label>
        </dt>
        <dd>
          <Input
            type="text"
            id={id}
            value={name}
            onChange={({ target: { value } }) => onIdentify(value)}
            placeholder="Type here"
          />
        </dd>
      </dl>
      <dl className="venue">
        <dt>Venue</dt>
        <dd>{venues.map(renderVenue)}</dd>
      </dl>
    </div>
  );
};
