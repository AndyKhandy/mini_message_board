import db from "../db/queries.js";

export async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages.rows, title: "Mini Messageboard" });
}

export async function getMessageById(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(404).send("Message not found");
  }

  const message = await db.getSpecificMessage(id);

  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("individualMessage", { message });
}
