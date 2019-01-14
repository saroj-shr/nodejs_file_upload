const express = require('express');
const router = express.Router();

const controller_index = require('../controller/controller_index');


router.get('/', controller_index.getIndexPage);
router.post('/', controller_index.postIndexPage);

module.exports = router;