'use strict';

const max = (...args) =>
  args.reduce((max, current) => max < current ? max = current : max, args[0]);

console.log(max(0, 5, 2, 3, 6, 1));
