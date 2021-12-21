const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Planner, User, Event, Partner, Guest } = require('../../models');
const withAuth = require('../../utils/auth');

//get all planners for specific event
router.get('/', withAuth, (req, res) => {
    Planner.findAll({
        where: {
            event_id: req.params.event_id
        },
        attributes: [
            'id',
            'name',
            'role',
            'email'
        ]
    })
    .then(dbPlannerData => {
        if(!dbPlannerData) {
            res.status(404).json({ message: 'No event planners were found for this event.' });
            return;
        }
        res.json(dbPlannerData);
    })
    .catch(err => {
        console.log(err.message);res.status(500).json(err);
    });
});

//get one planner by name
router.get('/:name', withAuth, (req, res) => {
    Planner.findOne()
})