const express = require("express");
const router = express.Router();

const adminController = require("./admin.controller");
const authMiddleware = require("../../middleware/authMiddleware");
const roleMiddleware = require("../../middleware/roleMiddleware");


/**
 * @swagger
 * /api/admin/stats:
 *   get:
 *     summary: Get admin analytics stats
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin statistics
 *       403:
 *         description: Forbidden
 */
router.get(
  "/stats",
  authMiddleware,
  roleMiddleware("admin"),
  adminController.getStats
);

module.exports = router;