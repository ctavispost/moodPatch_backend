const db = require('../models');

const index = (req, res) => {
    db.post.findAll()
        .then((posts) => {
            if (!posts) return res.json({
                message: 'No posts found in db.'
            });
            res.status(200).json({ posts: posts });
        })
        .catch(error => res.status(500).send(error));
}

//need a findAll where user_id matches req.user.id (or so)
//here

const create = async (req, res) => {
    const createdPost = await db.post.create(req.body);
    const relationInfo = await createdPost.addUser(req.user);
    res.json(createdPost);
}

const show = (req, res) => {
    db.post.findByPk(req.params.id)
        .then((foundPost) => {
            if (!foundPost) return res.json({
                message: 'Post with provided ID not found.'
            })

            res.status(200).json({ post: foundPost });
        })
        .catch(error => res.status(500).send(error));
}

const update = (req, res) => {
    db.post.update({
        ...req.body
    }, {
    where: {
        id: req.params.id
    }
    })
        .then((updatedPost) => {
            if (!updatedPost) return res.json({
                message: 'No post with that ID found.'
            })
            res.status(200).json({ post: updatedPost });
        })
        .catch(error => res.status(500).send(error));
}

const destroy = (req, res) => {
    db.post.destroy({
        where: {id: req.params.id }
    })
        .then(() => {
            res.status(200);
        })
        .catch(error => res.status(500).send(error));
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}