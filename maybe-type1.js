const Maybe = require('crocks/Maybe');

const inc = n => n + 1;

const safeNum = val =>
  typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing();
const input = safeNum(10);
const result = input.map(n => console.log('Calling inc') || inc(n));
console.log(result);
