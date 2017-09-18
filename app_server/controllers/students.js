/* GET students page */
const studentsList = function(req, res) {
    res.render('student-list', { title: 'IBM Cork CoderDojo - Student Management' });
};

const studentInfo = function(req, res) {
    res.render('student-info', { title: 'IBM Cork CoderDojo - Student Management' });
};

const addStudent = function(req, res) {
    res.render('index', { title: 'IBM Cork CoderDojo - Student Management' });
};

module.exports = {
    studentsList,
    studentInfo,
    addStudent
};
