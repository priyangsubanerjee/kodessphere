import nodemailer from "nodemailer";

export async function sendMail(
  username = "",
  pass = "",
  to = "",
  subject = "Kodessphere OTP",
  html = "",
  text = ""
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    secure: true,
    port: 465,
    auth: {
      user: username,
      pass: pass,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Konnexions IT Society" <noreply@konnexions.dev>', // sender address
      to,
      subject,
      text,
      html,
    });
    return {
      success: true,
      message: "Success",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failure",
    };
  }
}
