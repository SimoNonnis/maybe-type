const prop = require('crocks/Maybe/prop');
const propPath = require('crocks/Maybe/propPath');
const chain = require('crocks/pointfree/chain');

const postalCode = propPath(['address', 'postalCode']);
const getUser = () =>
  new Promise((resolve, reject) => {
    const result = {
      status: 200,
      body: {
        id: 1,
        username: 'tester',
        email: 'test@gmail.com',
        address: {
          street: '111 E. West St',
          city: 'Anywhere',
          state: 'PA',
          postalCode: '19123-4567'
        }
      }
    };

    resolve(prop('body', result));
  });

getUser()
  .then(res => res.chain(postalCode))
  .then(code => console.log(code));
