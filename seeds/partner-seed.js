const sequelize = require('../config/connection');
const { Partner } = require('../models');

const partnerdata = [
  {
    name: 'brett',
    email: 'brett@email.com',
    phone_number: '555-555-5555',
    event_id: 1
  },
  {
    name: 'lewis',
    email: 'lewis@email.com',
    phone_number: '555-555-5555',
    event_id: 2
  },
  {
    name: 'travis',
    email: 'travis@email.com',
    phone_number: '555-555-5555',
    event_id: 3
  },
  {
    name: 'austin',
    email: 'austin@email.com',
    phone_number: '555-555-5555',
    event_id: 4
  }
];

const seedPartner = () => Partner.bulkCreate(partnerdata);

module.exports = seedPartner;