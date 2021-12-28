const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'brett',
    email: 'brett@email.com',
    password: 'password123'
  },
  {
    username: 'lewis',
    email: 'lewis@email.com',
    password: 'password123'
  },
  {
    username: 'travis',
    email: 'travis@email.com',
    password: 'password123'
  },
  {
    username: 'austin',
    email: 'austin@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
