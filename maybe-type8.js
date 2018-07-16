const crocks = require('crocks');
const {
  and,
  compose,
  isEmpty,
  isString,
  Maybe,
  not,
  prop,
  safe,
  chain
} = crocks;
const { join, split, toLower } = require('ramda');

const article = {
  id: 1,
  name:
    'evilsoft/crocks A collection of well known Algebraic Data Types for your utter enjoyment'
};
const gitHubUrl = 'https://github.com/';

const isNotEmptyString = and(not(isEmpty), isString);
const makeUrlSlug = compose(
  join('-'),
  split(' '),
  toLower
);
const makeUrl = slug => `https://github.com/${slug}`;
const createUrlComposed = compose(
  makeUrl,
  makeUrlSlug
);
const getArticleName = obj =>
  prop('name', obj)
    .chain(safe(isNotEmptyString))
    .alt(Maybe.of('404'));

const url = getArticleName(article)
  .map(createUrlComposed)
  .option('');

console.log(url);
