const bookingService = require("./booking.service");
const audit = require("../../common/audit");
const logger = require("../../common/logger");




exports.book = async (req, res) => {
  try {
    const { slot_id } = req.body;
    
    const booking = await bookingService.bookSlot(
      req.user.id,
      slot_id
    );
    await audit.logAction(req.user.id, "Booked consultation");
    logger.info("Booking created successfully");

    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
