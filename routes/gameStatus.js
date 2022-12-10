const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * Representa la función para obtener el estado del juego.
 * @version 1.0.0 08/12/2022
 * @author Leyder Badillo Valdes
 */
router.get('/', (req, res) => {
    try {
        const id = req.params.id;
        Game.find({ id }).then((result) => res.json(result));
    } catch (err) {
        res.json(err.message).status(404);
    }
});

module.exports = router;
