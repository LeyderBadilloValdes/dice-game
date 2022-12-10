const { model, Schema } = require('mongoose');

/**
 * Representa el Schema del juego.
 * @version 1.0.0 08/12/2022
 * @author Leyder Badillo Valdes
 */
const GameSchema = new Schema(
    {
        inProgress: {
            type: Boolean,
            default: false,
        },

        winner: {
            type: Object,
        },

        gamers: [
            {
                id: Schema.ObjectId,
                name: String,
            },
        ],

        bet: {
            type: [{}],
        },
    },
    { timestamps: true }
);

module.exports = model('Game', GameSchema);
