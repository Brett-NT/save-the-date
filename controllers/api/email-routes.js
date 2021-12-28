const router = require('express').Router();
const nodemailer = require("nodemailer");

//create transport for sending email
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: 'holgalew@gmail.com',
    to: 'lholgate@earthlink.net',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };
  
  

  //get all events
router.post('/', (req, res) => {
    transporter.sendMail(req.body, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
      
    res.json("Email Sent!");
   
});

module.exports = router;