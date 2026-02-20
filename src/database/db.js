const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const connectWithRetry = async (retries = 10) => {
  while (retries) {
    try {
      await pool.query("SELECT 1");
      console.log("✅ DB Connected");
      break;
    } catch (err) {
      console.log("⏳ Waiting for DB... retrying in 3s");
      retries--;
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  if (!retries) {
    console.error("❌ Could not connect to DB");
  }
};

connectWithRetry();

module.exports = pool;
