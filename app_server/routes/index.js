const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

const homepageController = function (req, res) {
    res.render('index', { title: 'Express' });
};

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
