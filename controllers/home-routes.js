const router = require('express').Router();
const sequelize = require('../config/connection');
const { Planner, User, Partner, Event, Guest } = require('../models');



module.exports = router;