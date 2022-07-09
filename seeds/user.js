const { User } = require('../models');

const userData = [
  {
    name: 'Jeff',
    email: 'Jeff@email.com',
    password: '12345678'
  },
  {
    name: 'Joe',
    email: 'Joe@email.com',
    password: '12345678'
  },
  {
    name: 'Sabrina',
    email: 'Theteenagedwitch@email.com',
    password: '12345678'
  },
  {
    name: 'Jessica',
    email: 'Jessica@email.com',
    password: '12345678'
  },
  {
    name: 'Genevieve',
    email: 'Genevieve@email.com',
    password: '12345678'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
