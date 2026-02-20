const express = require("express");
const router = express.Router();

const controller = require("./doctor.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");


/**
 * @swagger
 * /api/doctors/profile:
 *   post:
 *     summary: Create doctor profile
 *     description: Doctor creates their own profile
 *     tags: [Doctors]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               specialization:
 *                 type: string
 *               experience:
 *                 type: integer
 *               bio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Profile created successfully
 *       403:
 *         description: Forbidden
 */

router.post(
  "/profile",
  auth,
  role("doctor"),
  controller.createProfile
);

router.get("/", controller.searchDoctors);

module.exports = router;
