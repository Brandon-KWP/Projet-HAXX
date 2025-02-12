const express = require("express");

/* ------------------------------ */

const Event = require("../models/eventmodel")

/* ------------------------------ */

exports.getEventPage = async (req, res) => {
  // console.log(req.body);
  try {
    const events = await Event.find();
    // console.log("📢 Liste des événements :", events);
    res.render("event", { events });
  } catch (err) {
    console.error("❌ Erreur de récuperation des evenements :", err);
    res.status(500).send("Erreur d'event");
  }
};

exports.getEventDetail = async (req, res) => {
  // console.log(req.body);
  try {
    const eventId = req.params.id
    const event = await Event.findById(eventId)
    res.status(200).json(event)
    res.render("eventdetail");
  } catch (err) {
    console.error("❌ Erreur de récuperation des evenements :", err);
    res.status(500).send("Erreur d'event");
  }
}
