const doctorService = require("./doctor.service");
const pool = require("../../database/db");

exports.createProfile = async (req, res) => {
  try {
    const { specialization, experience, bio } = req.body;

    const doctor = await doctorService.createDoctorProfile(
      req.user.id,
      specialization,
      experience,
      bio
    );

    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.searchDoctors = async (req, res) => {
  try {
    const { specialization } = req.query;

    let query = `
      SELECT d.id, d.specialization, d.experience, d.bio,
             u.email
      FROM doctors d
      JOIN users u ON d.user_id = u.id
    `;

    let values = [];

    if (specialization) {
      query += " WHERE d.specialization ILIKE $1";
      values.push(`%${specialization}%`);
    }

    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

