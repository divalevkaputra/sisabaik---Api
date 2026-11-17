import { pool } from "../src/db/pool.js";

const r = await pool.query(
  "SELECT current_database() AS nama, (SELECT ssl FROM pg_stat_ssl WHERE pid = pg_backend_pid()) AS tls",
);
console.log(r.rows[0]);
await pool.end();