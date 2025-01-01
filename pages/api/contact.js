import { StoreMessage } from "../../lib/contact-utils";

export default function handler(req, res) {
  if (req.method == "POST") {
    const { email, name, message } = req.body;
    const newMessage = { email, name, message };
    StoreMessage(newMessage);
    res.status(201).json({ message: "Email sent successfully" });
  }
}
