import React, { useState } from 'react';

import { useAutoFocus } from 'hooks';

export default ({ className, onSearch, loading }) => {
  const Input = useAutoFocus('input');
  const [geocode, setGeocode] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    onSearch(geocode);
  };
  const onChange = ({ target: { value } }) => setGeocode(value);

  return (
    <form onSubmit={onSubmit} className={className}>
      <fieldset>
        <legend>Find venues recommendations by geocodes:</legend>
        <div>
          <dl>
            <dt>
              <label htmlFor="geocode">Geocode</label>
            </dt>
            <dd>
              <Input
                type="text"
                id="geocode"
                placeholder="Type here"
                value={geocode}
                onChange={onChange}
                disabled={loading}
              />
            </dd>
          </dl>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </fieldset>
    </form>
  );
};
