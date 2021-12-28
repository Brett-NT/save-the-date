const sequelize = require('../config/connection');
const { Event } = require('../models');

const eventdata = [
  {
    event_name: 'brett',
    planner_id: 2
  },
  {
    event_name: 'lewis',
    planner_id: 1
  },
  {
    event_name: 'travis',
    planner_id: 4
  },
  {
    event_name: 'austin',
    planner_id: 2
  }
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;