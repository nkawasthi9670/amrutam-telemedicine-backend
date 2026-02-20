const pool = require("../../database/db");

exports.createUser = async (email, passwordHash, role) => {
  const result = await pool.query(
    `INSERT INTO users(email, password_hash, role)
     VALUES($1,$2,$3)
     RETURNING id, email, role`,
    [email, passwordHash, role]
  );

  return result.rows[0];
};

exports.findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  return result.rows[0];
};
