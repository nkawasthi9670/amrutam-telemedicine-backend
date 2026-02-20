const pool = require("../database/db");

exports.logAction = async (userId, action) => {
  await pool.query(
    `INSERT INTO audit_logs(user_id, action)
     VALUES($1,$2)`,
    [userId, action]
  );
};
