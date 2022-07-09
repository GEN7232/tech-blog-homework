const { Post } = require('../models');

const postData = [
    {
        title: 'Post 1',
        body: 'Post 1 data'
    },
    {
        title: 'Post 2',
        body: 'Post 2 data'
    }
];




const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;