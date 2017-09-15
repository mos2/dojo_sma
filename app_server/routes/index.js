const express = require('express');
const router = express.Router();
const ctrlStudents = require('../controllers/students');

const homepageController = function (req, res) {
    res.render('index', { title: 'Express' });
};
/* Students page. */
router.get('/', ctrlStudents.studentsList);
router.get('/student', ctrlStudents.student)
router.get('/student/add', ctrlStudents.addStudent)

module.exports = router;
