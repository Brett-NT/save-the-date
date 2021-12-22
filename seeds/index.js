const seedUsers = require('./user-seed');
const seedPlanner = require('./planner-seed');
const seedPartners = require('./partner-seed');
const seedGuests = require('./guest-seed');
const seedEvents = require('./event-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPlanner();
  console.log('--------------');

  await seedPartners();
  console.log('--------------');

  await seedGuests();
  console.log('--------------');

  await seedEvents();
  console.log('--------------');

  process.exit(0);
};

seedAll();