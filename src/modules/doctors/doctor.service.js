const pool = require("../../database/db");

exports.createDoctorProfile = async (
  userId,
  specialization,
  experience,
  bio
) => {
  const result = await pool.query(
    `INSERT INTO doctors(user_id, specialization, experience, bio)
     VALUES($1,$2,$3,$4)
     RETURNING *`,
    [userId, specialization, experience, bio]
  );

  return result.rows[0];
};
