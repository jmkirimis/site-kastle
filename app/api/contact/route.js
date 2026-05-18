import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const port = Number(process.env.SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // 465 = TLS implícito; 587 = STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Contato do site" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER, // Seu próprio e-mail
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "E-mail enviado com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return Response.json({ success: false, error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
