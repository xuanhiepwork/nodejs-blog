const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index 

router.get('/:slug', newsController.index);
router.get('/', newsController.index); //Tuyến đường gốc luôn nằm dưới cùng


module.exports = router;