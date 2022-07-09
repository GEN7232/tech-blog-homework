const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/myposts', withAuth, async (req, res) => {
    res.render("my-posts");
});

module.exports = router;