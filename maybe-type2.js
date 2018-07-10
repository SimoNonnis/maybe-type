const Maybe = require('crocks/Maybe');
const safe = require('crocks/Maybe/safe');
const isNumber = require('crocks/predicates/isNumber');
const isString = require('crocks/predicates/isString');

const inc = n => n + 1;
const toUpper = s => s.toUpperCase();

// const isNumber = n => typeof n === 'number';
// const isString = s => typeof s === 'string';
// const safe = (pred, val) => (pred(val) ? Maybe.Just(val) : Maybe.Nothing());
const safeN = safe(isNumber);
const safeS = safe(isString);

const inputN = safeN(10);
const resultN = inputN.map(inc);
console.log(resultN);

const inputS = safeS('Hello world');
const resultS = inputS.map(toUpper);
console.log(resultS);
