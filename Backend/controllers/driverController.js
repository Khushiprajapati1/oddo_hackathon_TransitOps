const Driver = require("../models/Driver");

// GET ALL DRIVERS
const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE DRIVER
const createDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.status(201).json(driver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE DRIVER
const updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(driver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE DRIVER
const deleteDriver = async (req, res) => {
  try {
    await Driver.findByIdAndDelete(req.params.id);

    res.json({ message: "Driver Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDrivers,
  createDriver,
  updateDriver,
  deleteDriver,
};