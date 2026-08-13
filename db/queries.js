import pool from "./pool.js";
async function getAllMessages() {
  return await pool.query("SELECT * FROM public.messages");
}

async function getSpecificMessage(id){
    const message = await pool.query("SELECT * FROM public.messages WHERE id = $1", [id]);
    if(message){
        return message.rows[0]
    }
    else{
        return null;
    }
}

async function insertMessage(username,message) {
  await pool.query(
    "INSERT INTO public.messages (user_message, username) VALUES ($1,$2)",
    [message, username],
  );
}

export default {
  getAllMessages,
  insertMessage,
  getSpecificMessage
};
