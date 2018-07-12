const prop = require('crocks/Maybe/prop');
const chain = require('crocks/pointfree/chain');
const safe = require('crocks/Maybe/safe');
const isNumber = require('crocks/predicates/isNumber');

const inc = n => n + 1;
const query = { currentPage: 4, pageSize: 10, totalPage: 203 };

const page = prop('currentPage', query);
const currentPage = page.chain(safe(isNumber));
const nextPage = currentPage.map(inc).option(1);

console.log(nextPage);
