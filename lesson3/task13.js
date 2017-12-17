'use strict';

const db = [
  {
    id: 1,
    name: 'Max',
    lastname: 'Fedotov',
    email: 'fedotom2@gmail.com'
  },
  {
    id: 2,
    name: 'Yehor',
    lastname: 'Vikulov',
    email: 'yehor.vikulov@gmail.com'
  },
  {
    id: 3,
    name: 'Volodimir',
    lastname: 'Domin',
    email: 'volodimirdomin@gmail.com'
  },
  {
    id: 4,
    name: 'Nikita',
    lastname: 'Svirid',
    email: 'nikita.svirid.03@gmail.com'
  }
];

const search = (key, value) =>
  db.filter(user => user[key] === value);

console.log(search('name', 'Max'));
