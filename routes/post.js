const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.index);
router.get('/userPosts', ctrl.post.indexUserPosts); //dbl check this route
router.get('/:id', ctrl.post.show);
router.post('/', ctrl.post.create);
router.put('/:id', ctrl.post.update);
router.delete('/:id', ctrl.post.destroy);

module.exports = router;