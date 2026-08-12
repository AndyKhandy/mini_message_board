import db from "../db/queries.js";

export async function insertNewMessage(req, res) {
    const {username,message} = req.params
  await db.insertMessage(username,message);
  res.redirect("/");
}

export function getForm(req, res) {
    res.render("form");
}
