const db = require('../models');

const show = (req, res) => {
    db.color.findByPk(req.params.id)
        .then((foundColor) => {
            if (!foundColor) return res.json({
                message: 'Post with provided ID not found.'
            })

            res.status(200).json({ color: foundColor });
        })
        .catch(error => res.status(500).send(error));
}

module.exports = {
    show
}