const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
const zookeeperRouters = require('./zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeeperRouters);

module.exports = router;
