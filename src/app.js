const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const doctorRoutes = require("./modules/doctors/doctor.routes");
const slotRoutes = require("./modules/slots/slot.routes");
const bookingRoutes = require("./modules/bookings/booking.routes");
const adminRoutes = require("./modules/admin/admin.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const requestLogger = require("./middleware/logger.middleware");
const healthRoutes = require("./modules/health/health.routes");



const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
app.use(requestLogger);
app.use("/health", healthRoutes);
app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);





app.get("/", (req, res) => {
  res.send("Amrutam Backend Running");
});

module.exports = app;
