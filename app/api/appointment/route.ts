import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, date, time, service, notes } = body;

    // ✅ basic validation
    if (!fullName || !email || !phone || !date || !time || !service) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("NOTARY_EMAIL:", process.env.NOTARY_EMAIL);
    console.log(
    "NOTARY_EMAIL_APP_PASSWORD exists:",
    !!process.env.NOTARY_EMAIL_APP_PASSWORD
    );
    console.log("NOTARY_EMAIL_RECEIVER:", process.env.NOTARY_EMAIL_RECEIVER);

    const EMAIL_USER = process.env.NOTARY_EMAIL;
    const EMAIL_PASS = process.env.NOTARY_EMAIL_APP_PASSWORD;
    const EMAIL_TO = process.env.NOTARY_EMAIL_RECEIVER;


    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return Response.json(
        { success: false, error: "Missing email env variables" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // ✅ Email 1: Send to NOTARY inbox (admin notification)
    await transporter.sendMail({
      from: `"Notaris & PPAT Iip Affadin, S.H., M.Kn" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email, // ✅ admin replies → goes to client
      subject: `📩 New Appointment Request — ${fullName} (${service})`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f8fafc; padding:24px;">
          <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
            
            <div style="padding:18px 22px; background:#0f172a;">
              <h2 style="margin:0; color:#ffffff; font-size:18px;">
                New Appointment Request
              </h2>
              <p style="margin:6px 0 0; color:#cbd5e1; font-size:13px;">
                Submitted via website appointment form
              </p>
            </div>

            <div style="padding:22px;">
              <p style="margin:0 0 14px; color:#334155; font-size:14px; line-height:1.6;">
                Hello Admin,<br/>
                You received a new appointment request. Details below:
              </p>

              <table style="width:100%; border-collapse:collapse; font-size:14px; color:#0f172a;">
                <tr>
                  <td style="padding:10px 0; color:#64748b; width:200px;">Full Name</td>
                  <td style="padding:10px 0; font-weight:600;">${fullName}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; color:#64748b;">Email</td>
                  <td style="padding:10px 0; font-weight:600;">${email}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; color:#64748b;">Phone</td>
                  <td style="padding:10px 0; font-weight:600;">${phone}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; color:#64748b;">Preferred Date</td>
                  <td style="padding:10px 0; font-weight:600;">${date}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; color:#64748b;">Preferred Time</td>
                  <td style="padding:10px 0; font-weight:600;">${time}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; color:#64748b;">Service</td>
                  <td style="padding:10px 0; font-weight:600;">${service}</td>
                </tr>
              </table>

              <div style="margin-top:16px; padding:14px; background:#f1f5f9; border-radius:12px;">
                <p style="margin:0 0 6px; font-size:13px; color:#64748b; font-weight:600;">
                  Additional Notes
                </p>
                <p style="margin:0; font-size:14px; color:#0f172a; line-height:1.6;">
                  ${notes?.trim() ? notes : "-"}
                </p>
              </div>

              <div style="margin-top:18px; padding-top:14px; border-top:1px solid #e2e8f0;">
                <p style="margin:0; color:#64748b; font-size:12px;">
                  Replying to this email will automatically reply to the client (Reply-To set).
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    // ✅ Email 2: Auto-reply to CLIENT (confirmation email)
    await transporter.sendMail({
      from: `"Notaris & PPAT Iip Affadin, S.H., M.Kn" <${EMAIL_USER}>`,
      to: email,
      subject: `✅ Appointment Request Received — Notaris & PPAT Iip Affadin`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f8fafc; padding:24px;">
          <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
            
            <div style="padding:18px 22px; background:#0f172a;">
              <h2 style="margin:0; color:#ffffff; font-size:18px;">
                Appointment Request Received ✅
              </h2>
              <p style="margin:6px 0 0; color:#cbd5e1; font-size:13px;">
                Notaris & PPAT Iip Affadin, S.H., M.Kn
              </p>
            </div>

            <div style="padding:22px;">
              <p style="margin:0 0 12px; color:#334155; font-size:14px; line-height:1.7;">
                Hello <strong>${fullName}</strong>,<br/>
                Thank you for submitting your appointment request. Our office has received your request and will contact you shortly to confirm the schedule.
              </p>

              <div style="margin-top:14px; padding:14px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc;">
                <p style="margin:0 0 10px; font-size:13px; color:#64748b; font-weight:600;">
                  Your Request Summary
                </p>

                <table style="width:100%; border-collapse:collapse; font-size:14px; color:#0f172a;">
                  <tr>
                    <td style="padding:6px 0; color:#64748b; width:200px;">Preferred Date</td>
                    <td style="padding:6px 0; font-weight:600;">${date}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; color:#64748b;">Preferred Time</td>
                    <td style="padding:6px 0; font-weight:600;">${time}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; color:#64748b;">Service</td>
                    <td style="padding:6px 0; font-weight:600;">${service}</td>
                  </tr>
                </table>
              </div>

              <p style="margin:16px 0 0; color:#334155; font-size:14px; line-height:1.7;">
                If you need immediate assistance, you can contact our office:
                <br/>
                <strong>WhatsApp:</strong> +62 816-697-686
                <br/>
                <strong>Email:</strong> kantornotarisiip@gmail.com
              </p>

              <div style="margin-top:18px; padding-top:14px; border-top:1px solid #e2e8f0;">
                <p style="margin:0; color:#94a3b8; font-size:12px;">
                  This is an automated confirmation email. Please do not share sensitive personal data via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
