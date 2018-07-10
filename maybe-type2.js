const Maybe = require('crocks/Maybe');

const inc = n => n + 1;
const toUpper = s => s.toUpperCase();

const isNumber = n => typeof n === 'number';
const isString = s => typeof s === 'string';
const safe = (val, pred) => (pred(val) ? Maybe.Just(val) : Maybe.Nothing());

const inputN = safe(10, isNumber);
const resultN = inputN.map(inc);
console.log(resultN);

const inputS = safe('hello', isString);
const resultS = inputS.map(toUpper);
console.log(resultS);
