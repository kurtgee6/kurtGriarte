var path = require('path');

module.exports = function (app) {

    //sends the user the index.html file 
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    //sends the user the story.html file 
    app.get('/thankYou', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/thankYouEmail.html'));
    });


};
