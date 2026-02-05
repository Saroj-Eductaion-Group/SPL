import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendRegistrationEmail = async (
  email: string,
  registrationId: string,
  teamName?: string,
  playerName?: string
) => {
  const subject = `SPL Registration Confirmation - ${registrationId}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">Saroj Premier League - Registration Confirmed</h2>
      
      <p>Dear ${teamName ? 'Team Manager' : playerName},</p>
      
      <p>Your registration for SPL U19 Cricket Tournament has been successfully submitted!</p>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Registration Details:</h3>
        <p><strong>Registration ID:</strong> ${registrationId}</p>
        ${teamName ? `<p><strong>Team Name:</strong> ${teamName}</p>` : ''}
        ${playerName ? `<p><strong>Player Name:</strong> ${playerName}</p>` : ''}
        <p><strong>Registration Type:</strong> ${teamName ? 'Team Registration' : 'Individual Registration'}</p>
        <p><strong>Amount:</strong> ₹${teamName ? '11,000' : '1,000'}</p>
      </div>
      
      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Complete payment to confirm your registration</li>
        <li>Upload required documents</li>
        <li>Wait for admin approval</li>
      </ul>
      
      <p>For any queries, contact us at support@spl.com</p>
      
      <p>Best regards,<br>SPL Tournament Committee</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject,
    html,
  });
};