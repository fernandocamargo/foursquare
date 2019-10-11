export const queryfy = object =>
  Object.entries(object)
    .map(pair => pair.map(window.encodeURIComponent).join('='))
    .join('&');

export const toJSON = response => response.json();
