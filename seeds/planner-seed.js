const sequelize = require('../config/connection');
const { Planner } = require('../models');

const plannerdata = [
  {
    name: 'brett',
    email: 'brett@email.com',
    event_id: 1
  },
  {
    name: 'lewis',
    email: 'lewis@email.com',
    event_id: 2
  },
  {
    name: 'travis',
    email: 'travis@email.com',
    event_id: 3
  },
  {
    name: 'austin',
    email: 'austin@email.com',
    event_id: 4
  }
];

const seedPlanner = () => Planner.bulkCreate(plannerdata);

module.exports = seedPlanner;