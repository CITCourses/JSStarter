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

const searchById = (id) =>
  db.filter(user => user.id === id);

const searchByName = (name) => 
  db.filter(user => user.name === name);

const searchByLastname = (lastname) =>
  db.filter(user => user.lastname === lastname);

const searchByEmail = (email) => 
  db.filter(user => user.email === email);

console.log('Search by ID: ');
console.log(searchById(1));

console.log('Search by Name: ');
console.log(searchByName('Volodimir'));

console.log('Search by Lastname: ');
console.log(searchByLastname('Vikulov'));

console.log('Search by Email: ');
console.log(searchByEmail('nikita.svirid.03@gmail.com'));
