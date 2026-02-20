const pool = require("../../database/db");

exports.bookSlot = async (patientId, slotId) => {
  const client = await pool.connect();

  try {
    // transaction start
    await client.query("BEGIN");

    // 🔒 LOCK SLOT (VERY IMPORTANT)
    const slotResult = await client.query(
      `SELECT * FROM availability_slots
       WHERE id = $1
       FOR UPDATE`,
      [slotId]
    );

    if (slotResult.rows.length === 0) {
      throw new Error("Slot not found");
    }

    const slot = slotResult.rows[0];

    // already booked check
    if (slot.is_booked) {
      throw new Error("Slot already booked");
    }

    // create booking
    const bookingResult = await client.query(
      `INSERT INTO bookings (patient_id, slot_id, status)
       VALUES ($1, $2, 'confirmed')
       RETURNING *`,
      [patientId, slotId]
    );

    // mark slot booked
    await client.query(
      `UPDATE availability_slots
       SET is_booked = true
       WHERE id = $1`,
      [slotId]
    );

    // commit transaction
    await client.query("COMMIT");

    return bookingResult.rows[0];

  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};
