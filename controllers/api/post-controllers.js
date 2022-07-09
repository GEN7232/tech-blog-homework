const router = require("express").Router();
const { Post } =require("../../models")

router.post("/", async (req, res) => {
    const newPost = await Post.create({...req.body, user_id: req.session.user_id})
})

module.exports = router;