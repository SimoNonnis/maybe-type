const crocks = require('crocks');
const { and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks;
const { join, split, toLower } = require('ramda');

const article = {
  id: 1,
  name: 'evilsoft/crocks'
};
