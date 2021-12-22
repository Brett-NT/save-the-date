const sequelize = require('../config/connection');
const { Event } = require('../models');

const eventdata = [
  {
    event_name: 'brett',
    date: new Date()
  },
  {
    event_name: 'lewis',
    date: new Date()
  },
  {
    event_name: 'travis',
    date: new Date()
  },
  {
    event_name: 'austin',
    date: new Date()
  }
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;