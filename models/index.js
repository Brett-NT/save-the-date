// import all models
const Event = require("./Event");
const Planner = require("./Planner");
const Guest = require("./Guest");
const User = require("./User");
const Partner = require("./Partner");
const PartnerEvents = require("./PartnerEvents");
const GuestEvents = require("./GuestEvents");

// create associations
Planner.hasMany(Event, {
  foreignKey: "planner_id",
});

Event.belongsTo(Planner, {
  foreignKey: "planner_id",
  onDelete: "SET NULL"
});

Partner.belongsToMany(Event, {
  through: PartnerEvents,
  as: "partner_events",
  foreignKey: "partner_id",
  onDelete: "SET NULL"
});

Event.belongsToMany(Partner, {
  through: PartnerEvents,
  as: "partner_events",
  foreignKey: "event_id",
  onDelete: "SET NULL"
});

Guest.belongsToMany(Event, {
  through: GuestEvents,
  as: "guest_events",
  foreignKey: "guest_id",
  onDelete: "SET NULL"
});

Event.belongsToMany(Guest, {
  through: GuestEvents,
  as: "guest_events",
  foreignKey: "event_id",
  onDelete: "SET NULL"
});

User.hasMany(Event, {
  foreignKey: "user_id",
  onDelete: "SET NULL"
});

Event.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL"
});

module.exports = { Planner, Event, Guest, User, Partner, PartnerEvents, GuestEvents };
