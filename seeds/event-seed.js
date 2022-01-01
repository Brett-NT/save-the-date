const sequelize = require('../config/connection');
const { Event } = require('../models');

const eventdata = [
  {
    event_name: 'birthday',
    description: '24th birthday at my house.',
    planner_name: 'John Doe',
    planner_contact: 'johndoe@email.com'
  },
  {
    event_name: 'wedding',
    description: 'Its a wedding at The Grand America.',
    planner_name: 'Eric Smith',
    planner_contact: 'ericsmith@email.com'
  },
  {
    event_name: 'graduation party',
    description: 'party at University of Utah Student Union.',
    planner_name: 'John Doe',
    planner_contact: 'johndoe@email.com'
  },
  {
    event_name: 'reunion',
    description: 'High Scool reunion at the Four Seasons.',
    planner_name: 'Susan Miller',
    planner_contact: 'susanmiller@email.com'
  }
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;