const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose');
const Users = require('../../electhon-backend/Users');
const app=express();
const port=3001;

//Middlewares
app.use(express.json());
app.use(cors());


//connection

const connection_url="mongodb+srv://yash:yash@cluster0.lavqhpz.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(connection_url,{
    useNewUrlparser: true,
    useUnifiedTopology: true,
})
//API

// async function sendEmail(from, to, subject, text, html) {
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'vidhanjain143@gmail.com',
//         pass: 'lethuetxnpbzdzgd'
//       }
//     });
  
//     let info = await transporter.sendMail({
//       from: from,
//       to: to,
//       subject: subject,
//       text: text,
//       html: html
//     });
  
//     console.log('Message sent: %s', info.messageId);
//   }
  
// sendEmail('vidhanjain143@gmail.com', 'jainv9638@gmail.com', 'Test Email', 'This is a test email.', '<h1>This is a test email.</h1>');

app.get('/',(req,res)=>res.status(200).send('Hello World'));

//add signup

app.post('/users/signup',(req,res)=>{
    const userDetail = req.body;
    console.log('User Details>>>',userDetail);
    const ud=new Users({
        name:userDetail.name,
        password:userDetail.password,
        email:userDetail.email,
        phoneno:userDetail.phoneno,
        aadharno:userDetail.aadharno,
        age:userDetail.age,
        state:userDetail.state,
        gender:userDetail.gender,
    })
   
    ud.save().then(()=>{
        res.status(200).send("Saved")
    }).catch((err)=>{
        res.status(500).send(err.message);
    })

});

app.post('/users/login',(req,res)=>{
    const { email, password } = req.body;
    Users.findOne({ email })
    .then(user => {
      if (!user) {
        res.status(401).send('Invalid username or password');
        return;
      }
  
      if (password !== user.password) {
        res.status(401).send('Invalid username or password');
        return;
      }
  
      res.send(`Welcome ${user.name}`);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
  
    })
//api for payment

// app.post('/payment/create', async(req,res)=>{
//     const total=req.body.amount;
//     console.log('Payment Request recieved for this rupees',total);

//     const payment = await stripe.paymentIntents.create({
//         amount:total,
//         currency:'inr',
//     });

//     res.status(201).send({
//         clientSecret:payment.client_secret,
// });
// });

app.listen(port,()=>console.log('Listening on port ',port));