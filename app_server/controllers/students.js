/* GET students page */
const studentsList = function(req, res) {
    res.render('index', { title: 'IBM Cork CoderDojo - Student Management' });
};

const student = function(req, res) {
    res.render('index', { title: 'IBM Cork CoderDojo - Student Management' });
};

const addStudent = function(req, res) {
    res.render('index', { title: 'IBM Cork CoderDojo - Student Management' });
};

module.exports = {
    studentsList,
    student,
    addStudent
};
