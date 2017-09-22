var path = require('path');

module.exports = function (app) {

    //sends the user the index.html file 
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/story', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/story.html'));
    });

    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/contact.html'));
    });

    app.get('/projects', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/project.html'));
    });

};
