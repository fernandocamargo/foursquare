import update from 'immutability-helper';

export const create = () => current =>
  update(current, {
    $add: [[window.performance.now().toString(), { name: '', vote: '' }]],
  });

export const identify = ({ id, name }) => current =>
  update(current, { [id]: { name: { $set: name } } });

export const vote = ({ id, venue }) => current =>
  update(current, { [id]: { vote: { $set: venue } } });
