import express from "express";
import cors from 'cors';
import nodemailer from "nodemailer";
import dotenv from "dotenv";
const app = express();

dotenv.config();

// APP USE

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//nodemailer 

const transporter = nodemailer.createTransport({
    host:'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    tls:{
        ciphers:'SSLv3'
    },
    auth: {
        user: 'tadikoiaccess@outlook.fr',
        pass: process.env.PASSWORD
    }
});

app.post('/contact', (req, res) => {
    const options = {
        from: "nouveau contact",
        to: 'tadikoiaccess@outlook.fr',
        subject: 'Prise de contact',
        text:`Nom de l'établissement: ${req.body.nomEtablissement}  \nE-mail: ${req.body.email} \nPrénom: ${req.body.prenom} \nNom: ${req.body.nom} \nTéléphone: ${req.body.telephone} \nMessage: ${req.body.message}`,
        replyTo: req.body.email
      };

  transporter.sendMail(options, (error, info) => {
    if(error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    } else {
      console.log('E-mail envoyé' + info.response);
      res.send('E-mail envoyé avec succès');
    }
});
});

// Listen port
app.listen(9576,function(){
    console.log(`http://localhost:9576`);
});

