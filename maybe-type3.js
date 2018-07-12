const safe = require('crocks/Maybe/safe');
const isNumber = require('crocks/predicates/isNumber');

const inc = n => n + 1;
const dbl = n => n * 2;
const incDbl = n => {
  const safeN = safe(isNumber, n);
  return safeN
    .map(inc)
    .map(dbl)
    .option(0);
};

const result = incDbl(9);
console.log(result);
