import update from 'immutability-helper';

export const getStatsFrom = participants => {
  const { score, hightest } = Array.from(participants).reduce(
    (stack, [, { vote }]) => {
      const {
        score: { [vote]: current = 0 },
      } = stack;
      const next = current + 1;

      return vote
        ? update(stack, {
            score: { [vote]: { $set: next } },
            hightest: { $apply: hightest => Math.max(hightest, next) },
          })
        : stack;
    },
    { score: {}, hightest: 0 }
  );
  const winners = Object.entries(score).reduce(
    (stack, [id, votes]) => (votes === hightest ? stack.concat(id) : stack),
    []
  );
  const winner = winners.length === 1 && winners[0];

  return { score, hightest, winners, winner };
};
