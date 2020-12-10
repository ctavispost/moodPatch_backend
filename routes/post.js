const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.index);
//route for getting only user's posts on this line
router.get('/:id', ctrl.post.show);
router.post('/', ctrl.post.create);
router.pout('/:id', ctrl.post.update);
router.delete('/:id', ctrl.post.destroy);

module.exports = router;