var path = require('path');

module.exports = function (app) {

    //sends the user the index.html file 
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    //sends the user the story.html file 
    app.get('/story', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/story.html'));
    });

    //sends the user the contact.html file 
    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/contact.html'));
    });

    //sends the user the project.html file 
    app.get('/projects', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/project.html'));
    });

};
