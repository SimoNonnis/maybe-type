const crocks = require('crocks');
const { and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks;
const { join, split, toLower } = require('ramda');

const article = {
  id: 1,
  name: 'evilsoft/crocks'
};
const url = 'https://github.com/';

const isNotEmptyString = and(not(isEmpty), isString);
const makeUrlSlug = compose(
  join('-'),
  split(' '),
  toLower
);
const makeUrl = slug => `https://github.com/${slug}`;
