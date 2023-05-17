import nodemailer from 'nodemailer'

const sendMail = async (options: { subject: string;  html: any; }) => {
   
    try {
        // 1) Create a transporter
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USER, // generated ethereal user
              pass: process.env.MAILTRAP_PASSWORD, // generated ethereal password
            },
          });
      
          const hrEmail = process.env.HR_APP_EMAIL
          const sendTo = process.env.SEND_TO
        // 2) Define the email options
        const mailOptions = {
            from: `HR App <info@jajaapp.co.za>`,
            to: sendTo,
            subject: options.subject,
            html: options.html,
        };
      
        // 3) Actually send the email
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error occurred while sending email', error);
    }
};

export default sendMail;
