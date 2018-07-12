const safe = require('crocks/Maybe/safe');
const isNumber = require('crocks/predicates/isNumber');
const compose = require('crocks/helpers/compose');

const inc = n => n + 1;
const dbl = n => n * 2;
const incDbl = n =>
  safe(isNumber, n)
    .map(
      compose(
        dbl,
        inc
      )
    )
    .option(0);
const result = incDbl(9);
console.log(result);
