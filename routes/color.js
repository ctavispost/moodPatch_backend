const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/:id', ctrl.color.show);

module.exports = router;