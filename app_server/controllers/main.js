/* GET home page */
const index = function(req, res) {
    res.render('index', { title: 'IBM Cork CoderDojo - Student Management' });
};

module.exports = {
    index
};
