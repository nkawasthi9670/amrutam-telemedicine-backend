const router = require("express").Router();
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check server health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 uptime:
 *                   type: number
 *                 timestamp:
 *                   type: string
 */


router.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

module.exports = router;
