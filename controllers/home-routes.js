const router = require('express').Router();
const { Post, User } = require('../models/');

router.get('/', async (req, res) => {
    const postData = await Post.findAll({include: [User]});
    const posts = postData.map(post => post.get({plain: true}))
    res.render('homepage', {posts});
});

router.get('/login', async (req, res) => {
    res.render('login');
})

module.exports = router;