import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("Missing Gmail credentials");
      return Response.json({ error: "Server configuration error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: gmailUser,
      to: "ednamaim@gmail.com",
      replyTo: email || gmailUser,
      subject: `[מכללת אמביציות] פנייה חדשה${subject ? ` — ${subject}` : ""}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #5B2D8E; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">פנייה חדשה מהאתר</h2>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 30%;">שם:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 8px; font-weight: bold;">טלפון:</td>
                <td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 8px; font-weight: bold;">דוא"ל:</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>` : ""}
              ${subject ? `
              <tr style="background: white;">
                <td style="padding: 8px; font-weight: bold;">נושא:</td>
                <td style="padding: 8px;">${subject}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">הודעה:</td>
                <td style="padding: 8px; white-space: pre-line;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="text-align: center; padding: 10px; color: #999; font-size: 12px;">
            נשלח מאתר מכללת אמביציות
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
