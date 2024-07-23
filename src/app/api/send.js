// src/app/api/send.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT, 10),
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: 'info@inviertecr.com',
    subject: 'Mensaje del formulario de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Message Sent', result);
    res.status(200).json({ success: true, message: 'Email enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el email', error);
    res.status(500).json({ success: false, message: 'Error al enviar el email.', error: error.message });
  }
}
