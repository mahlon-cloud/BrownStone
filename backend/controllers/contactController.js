import sendEmail from "../utils/sendEmail.js";

export const submitMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    await sendEmail({
      to: "info@brownstoneltd.com",
      subject: `New Contact Form Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};
