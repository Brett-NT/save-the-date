const sequelize = require('../config/connection');
const { Guest } = require('../models');

const guestdata = [
  {
    name: 'brett',
    email: 'brett@email.com',
    attending: true,
    event_id: 1
  },
  {
    name: 'lewis',
    email: 'lewis@email.com',
    attending: false,
    event_id: 2
  },
  {
    name: 'travis',
    email: 'travis@email.com',
    attending: true,
    event_id: 3
  },
  {
    name: 'austin',
    email: 'austin@email.com',
    attending: false,
    event_id: 4
  }
];

const seedGuest = () => Guest.bulkCreate(guestdata);

module.exports = seedGuest;