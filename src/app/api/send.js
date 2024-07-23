// src/app/api/send.js
import nodemailer from 'nodemailer';
import Cors from 'cors';

// Inicializando el middleware de CORS
const cors = Cors({
    methods: ['POST'],
    origin: '*', // Esto permite solicitudes de cualquier origen
  });
  

// Helper para inicializar CORS y manejar la respuesta de preflight (si es necesario)
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Ejecuta el middleware de CORS
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  // Continúa con la lógica del correo
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT, 10),
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
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
    res.status(200).json({ success: true, message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el email', error);
    res.status(500).json({ success: false, message: 'Error al enviar el email', error: error.message });
  }
}
