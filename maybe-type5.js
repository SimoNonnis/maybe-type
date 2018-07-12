const safe = require('crocks/Maybe/safe');
const isNumber = require('crocks/predicates/isNumber');
const compose = require('crocks/helpers/compose');

const inc = n => n + 1;
const query = { currentPage: 2, pageSize: 10, totalPage: 203 };
const { currentPage } = query;
const nextPage = safe(isNumber, currentPage)
  .map(inc)
  .option(0);

console.log(nextPage);
