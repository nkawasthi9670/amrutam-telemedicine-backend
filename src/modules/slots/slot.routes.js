const express = require("express");
const router = express.Router();

const controller = require("./slot.controller");
const auth = require("../../middleware/authMiddleware");
const role = require("../../middleware/roleMiddleware");

/**
 * @swagger
 * /api/slots:
 *   post:
 *     summary: Create doctor slot
 *     description: Doctor creates available time slots
 *     tags: [Slots]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2026-02-20"
 *               start_time:
 *                 type: string
 *                 example: "10:00"
 *               end_time:
 *                 type: string
 *                 example: "10:30"
 *     responses:
 *       201:
 *         description: Slot created
 *       403:
 *         description: Forbidden
 */



router.post(
  "/",
  auth,
  role("doctor"),
  controller.createSlot
);

module.exports = router;
