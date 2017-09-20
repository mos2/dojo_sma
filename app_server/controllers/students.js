/* GET students page */
const studentsList = function(req, res) {
    res.render('student-list',
        { title: 'IBM Cork CoderDojo - Student Management: Student List',
            pageHeader:
                {
                    title: 'Student List',
                    description: 'Browse through all the students registered for the CoderDojo'
            },
            students:
            [
                {
                    name: "Shane Williams",
                    email: "shane@anemail.com",
                    mentor: false,
                    current_class: "Python",
                    current_role: "Ninja",
                    last_belt: "White",
                    last_attended: "16th September",
                    last_class: "Web Dev"
                },
                {
                    name: "David Hurley",
                    email: "djm@gmail.com",
                    mentor: true,
                    current_class: "Python",
                    current_role: "Mentor",
                    last_belt: "Black",
                    last_attended: "16th September",
                    last_class: "Comp Sci"
                }
            ]
        });
};

const studentInfo = function(req, res) {
    res.render('student-info', { title: 'IBM Cork CoderDojo - Student Management' });
};

const addStudent = function(req, res) {
    res.render('add-student-form', { title: 'IBM Cork CoderDojo - Student Management' });
};

module.exports = {
    studentsList,
    studentInfo,
    addStudent
};
