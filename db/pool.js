import { Pool } from "pg";
import process from "node:process";

if (process.env.NODE_ENV !== "production"){
    process.loadEnvFile();
}

export default new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon cloud connections
  },
});
