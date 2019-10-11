import update from 'immutability-helper';

export default (object, blacklist = []) =>
  Object.entries(object).reduce(
    (stack, [key, value]) =>
      !blacklist.includes(key)
        ? update(stack, { [key]: { $set: value } })
        : stack,
    {}
  );
