import { createTransport } from 'nodemailer';

const emailSender = async (subject: string, text: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: text,
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Error sending email:', err);
    throw err;
  }
};

export default emailSender;
