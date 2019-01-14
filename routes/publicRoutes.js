import express from 'express';
import router from express.Router();

import controller_index from '../controller/controller_index';

router.get('/index', controller_index.getIndexPage);

module.exports = router;