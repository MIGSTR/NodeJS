var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'miguelcs0405@gmail.com',
    pass: 'xywb yeia dupd minw'
  }
});

var mailOptions = {
  from: 'miguelcs0405@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Miguel Costa Kuser de Souza. 2B, xywb yeia dupd minw'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 