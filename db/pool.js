import { Pool } from "pg";
import { loadEnvFile } from "node:process";

loadEnvFile();

export default new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon cloud connections
  },
});
