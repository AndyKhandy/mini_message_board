import { Client } from "pg";
import { loadEnvFile } from "node:process";

loadEnvFile();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_message TEXT,
  username TEXT,
  added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO messages (user_message, username) 
VALUES
  ('Hi there!', 'Amando'),
  ('There is my first blog kinda exciteddd', 'Odin'),
  ('Hello World!','Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();
