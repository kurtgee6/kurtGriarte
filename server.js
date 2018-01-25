//dependencies

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var app = express();

//server
var PORT = process.env.PORT || 8080;

//parse application
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static('apps/public'));

//  //sends the user the index.html file 
//  app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/../public/index.html'));
// });


//gets the HTML file stored in htmlRoute.js so users sees display
require('./apps/routing/htmlRoutes.js')(app);

app.post('/send', function(req, res) {

        var from = req.body.email;

        var output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'businessfankurt@gmail.com', // generated ethereal user
            pass: 'passwordStolen'  // generated ethereal password
        },
        tls:{
        rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: '"Nodemailer Contact" < ' + from  + '>', // sender address
        to: 'dummytestrest@gmail.com', // list of receivers
        subject: 'New Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: %s', info.messageId);   

        return res.redirect('/thankYou');

    });

});

//PORT listener
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
