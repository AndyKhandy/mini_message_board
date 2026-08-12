import pool from "./pool.js";
async function getAllMessages() {
  return await pool.query("SELECT * FROM messages");
}

async function getSpecificMessage(id){
    const message = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    if(message){
        return message.rows[0]
    }
    else{
        return null;
    }
}

async function insertMessage({ userMessage, username }) {
  await pool.query(
    "INSERT INTO messages (user_message, username) VALUES ($1,$2)",
    [userMessage, username],
  );
}

export default {
  getAllMessages,
  insertMessage,
  getSpecificMessage
};
