const pool = require("../../database/db");

exports.getStats = async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT
        (SELECT COUNT(*) FROM users) AS total_users,
        (SELECT COUNT(*) FROM doctors) AS total_doctors,
        (SELECT COUNT(*) FROM bookings) AS total_bookings,
        (SELECT COUNT(*) FROM availability_slots) AS total_slots
    `);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};