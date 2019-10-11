import React from 'react';

export default ({ className, name, website, category, rating }) => (
  <article className={className}>
    <dl className="name">
      <dt>Name</dt>
      <dd>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
        >
          {name}
        </a>
      </dd>
    </dl>
    <dl className="category">
      <dt>Category</dt>
      <dd>{category}</dd>
    </dl>
    <dl className="rating">
      <dt>Rating</dt>
      <dd>{rating}</dd>
    </dl>
  </article>
);
