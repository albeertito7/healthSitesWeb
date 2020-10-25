const express = require('express');
const path = require('path');
const indexRoute = require('./routes/');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const app = express();

// settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// middlewares

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}))

// listening the server
app.listen(app.get('port'), () => {
	console.log("Server on port", app.get('port'));
});

app.post('/contact', (req, res) => {
	console.log("Contact");

  const smtpTrans = nodemailer.createTransport({
    host: 'mx4.compsaonline.com', //server
    port: 587,
    secure: false,
    auth: {
      user: "web@compsa.es", //email
      pass: "121512xjsm" //password
    }
  })
  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: 'albertperez@compsaonline.com',
    subject: 'New message from contact form at healthsites',
    text: `${req.body.name} (${req.body.email}) subject: ${req.body.subject} says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contactError', { title: 'Contact Error' }) // Show a page indicating failure
    }
    else {
      res.render('contactSuccess', { title: 'Contact Success' }) // Show a page indicating success
    }
  })
})