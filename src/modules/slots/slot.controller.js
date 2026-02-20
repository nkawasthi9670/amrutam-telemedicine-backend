const slotService = require("./slot.service");
const pool = require("../../database/db");

exports.createSlot = async (req, res) => {
  try {
    const { date,start_time, end_time } = req.body;

    
    const doctorResult = await pool.query(
      "SELECT id FROM doctors WHERE user_id=$1",
      [req.user.id]
    );

    if (!doctorResult.rows.length) {
      return res.status(404).json({
        message: "Doctor profile not found"
      });
    }

    const doctorId = doctorResult.rows[0].id;

    const slot = await slotService.createSlot(
      doctorId,
      date,
      start_time,
      end_time
    );

    res.status(201).json(slot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
