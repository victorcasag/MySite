const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'victorcasag@gmail.com',
            pass: 'V1ct0r@123'
        }
    });

    const mailOptions = {
        from: email,
        to: 'seuemail@gmail.com',
        subject: `Novo contato de ${name}`,
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email enviado com sucesso!');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});