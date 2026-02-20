const express = require("express");
const router = express.Router();

const bookingController = require("./booking.controller");
const idempotency = require("../../middleware/idempotency.middleware");
const authMiddleware = require("../../middleware/authMiddleware");
const roleMiddleware = require("../../middleware/roleMiddleware");

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Patient books a doctor slot
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - slot_id
 *             properties:
 *               slot_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Booking successful
 *       400:
 *         description: Bad request
 *       403:
 *         description: Forbidden
 */

router.post(
  "/",
  authMiddleware,
  roleMiddleware("patient"),
  idempotency,
  bookingController.book
);

module.exports = router;
