const safe = require('crocks/Maybe/safe');
const { compose, isNil, not } = require('ramda');

const inc = n => n + 1;
const query = { currentPage: 2, pageSize: 10, totalPage: 203 };

const isNotNil = compose(
  not,
  isNil
);
const currentPage = safe(isNotNil, query.currentPage);
const nextPage = currentPage.map(inc).option(1);

console.log(nextPage);
