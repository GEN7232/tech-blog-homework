const sequelize = require('../config/connection');
const userSeeds = require('./user');
const seedPosts = require('./post');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await userSeeds();
  console.log('\n----- Users SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

//   await seedTags();
//   console.log('\n----- TAGS SEEDED -----\n');

//   await seedProductTags();
//   console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
