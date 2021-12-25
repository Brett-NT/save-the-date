const router = require('express').Router();

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const plannerRoutes = require('./planner-routes');
const partnerRoutes = require('./partner-routes');
const guestRoutes = require('./guest-routes');


router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/planners', plannerRoutes);
router.use('/partners', partnerRoutes);
router.use('/guests', guestRoutes);

module.exports = router;
