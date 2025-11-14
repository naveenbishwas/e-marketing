// import nodemailer from "nodemailer";

// export async function GET() {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtpout.secureserver.net",
//       port: 465,
//       secure: true, // SSL
//       auth: {
//         user: process.env.MAIL_USER, // support@cozycabz.com
//         pass: process.env.MAIL_PASS, // your mailbox password
//       },
//     });

//     await transporter.sendMail({
//       from: `"Cozy Cabs Test" <${process.env.MAIL_USER}>`,
//       to: process.env.MAIL_TO,
//       subject: "SMTP TEST SUCCESS ✔",
//       text: "This means your GoDaddy SMTP connection works!",
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     console.log("SMTP TEST ERROR:", error);
//     return Response.json({ success: false, error: error.message });
//   }
// }

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Unnity" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Unnity Enquiry",

      html: `
        <h2>New Enquiry</h2>
        <p><b>CompanyName:</b> ${body.companyName}</p>
        <p><b>Budget:</b> ${body.budget}</p>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Service:</b> ${body.service}</p>
        <p><b>designation:</b> ${body.designation}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("SMTP ERROR:", error);
    return Response.json({ success: false, error: error.message });
  }
}
