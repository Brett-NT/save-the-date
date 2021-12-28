const sequelize = require('../config/connection');
const { Partner } = require('../models');

const partnerdata = [
  {
    name: 'brett',
    role: "lead",
    email: 'brett@email.com',
    phone_number: '555-555-5555',
    event_id: 1
  },
  {
    name: 'lewis',
    role: "seeds",
    email: 'lewis@email.com',
    phone_number: '555-555-5555',
    event_id: 2
  },
  {
    name: 'travis',
    role: "handlebars",
    email: 'travis@email.com',
    phone_number: '555-555-5555',
    event_id: 3
  },
  {
    name: 'austin',
    role: "css/styling",
    email: 'austin@email.com',
    phone_number: '555-555-5555',
    event_id: 4
  }
];

const seedPartner = () => Partner.bulkCreate(partnerdata);

module.exports = seedPartner;