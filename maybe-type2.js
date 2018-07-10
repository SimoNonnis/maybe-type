const Maybe = require('crocks/Maybe');

const inc = n => n + 1;
const toUpper = s => s.toUpperCase();

const safeNum = val =>
  typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing();
const safeString = val =>
  typeof val === 'string' ? Maybe.Just(val) : Maybe.Nothing();

const inputN = safeNum(10);
const resultN = inputN.map(inc);
console.log(resultN);

const inputS = safeString('hello');
const resultS = inputS.map(toUpper);
console.log(resultS);
