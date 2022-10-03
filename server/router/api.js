const router = require('express').Router();

/*---------URL Prefix: /api ----------*/
router.use('/students', require('./students'))
router.use('/campuses', require('./campuses'))

module.exports = router;