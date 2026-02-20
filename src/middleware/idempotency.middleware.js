const pool = require("../database/db");

module.exports = async (req, res, next) => {
  const key = req.headers["idempotency-key"];

  if (!key) return next();

  try {
    const existing = await pool.query(
      "SELECT response FROM idempotency_keys WHERE key=$1",
      [key]
    );

    if (existing.rows.length) {
      return res.json(existing.rows[0].response);
    }

    const originalJson = res.json.bind(res);

    res.json = async (body) => {
      await pool.query(
        "INSERT INTO idempotency_keys(key,response) VALUES($1,$2)",
        [key, body]
      );
      return originalJson(body);
    };

    next();
  } catch (err) {
    next(err);
  }
};