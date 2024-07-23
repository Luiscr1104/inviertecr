require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Aplica middleware para CORS y para parsear JSON en requests entrantes
app.use(cors());
app.use(express.json());

// Configura el transporte de nodemailer utilizando las variables de entorno
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10),
  secure: process.env.MAIL_SECURE === 'true', // Importante: convertir a booleano
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// Endpoint para enviar correos electrónicos desde el formulario
app.post('/send', (req, res) => {
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: 'info@inviertecr.com', // Específica a quién enviar el correo
    subject: 'Mensaje del formulario de contacto',
    text: `Nombre: ${req.body.name}\nEmail: ${req.body.email}\nMensaje: ${req.body.message}`,
    // Agrega una versión HTML si es necesario
    html: `<p>Nombre: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Mensaje: ${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar correo: ', error);
      return res.status(500).json({ success: false, message: 'Algo salió mal al enviar el mensaje', error: error.message });
    }
    console.log('Correo enviado: ' + info.response);
    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
