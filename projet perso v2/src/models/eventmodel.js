const mongoose = require("mongoose")

// schema pour les event
const EventShema = new mongoose.Schema({
    nom: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    ville: String,
    description: { type: String, required: true },
    place: Number
})

// Définir le modèle + bien mettre le nom de la base de donnée
const Event = mongoose.model("Events", EventShema)

// exportation du modele
module.exports = Event