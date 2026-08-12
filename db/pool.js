import { Pool } from "pg";
import { loadEnvFile } from "node:process";

loadEnvFile();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}

getPgVersion();
