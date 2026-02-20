const pool = require("../../database/db");

exports.createSlot = async (
  doctorId,
  date,
  startTime,
  endTime
) => {
  const result = await pool.query(
    `INSERT INTO availability_slots
     (doctor_id, date, start_time, end_time)
     VALUES ($1,$2,$3,$4)
     RETURNING *`,
    [doctorId, date, startTime, endTime]
  );

  return result.rows[0];
};
