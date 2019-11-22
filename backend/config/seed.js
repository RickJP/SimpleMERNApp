'use strict()';

let User = require('../api/users/users.model');

User.countDocuments({}).exec((err, count) => {
  if (err) {
    console.error(err);
    return;
  }

  if (count == 0) {
    User.create(
      {name: 'Allen', username: 'allen', password: 'vendoradmin'},
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Seed superuser created');
      }
    );
  }
});
