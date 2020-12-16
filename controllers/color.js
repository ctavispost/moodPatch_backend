const db = require('../models');

const index = (req, res) => {
    db.color.findAll()
        .then((colors) => {
            if (!colors) return res.json({
                message: 'No colors found in db.'
            });
            res.status(200).json({ colors: colors });
        })
        .catch(error => {
            res.status(500).send(error)
        });
}

const show = (req, res) => {
    db.color.findByPk(req.params.id)
        .then((foundColor) => {
            if (!foundColor) return res.json({
                message: 'Color with provided ID not found.'
            })
            res.status(200).json({ color: foundColor });
        })
        .catch(error => res.status(500).send(error));
}

module.exports = {
    index,
    show
}