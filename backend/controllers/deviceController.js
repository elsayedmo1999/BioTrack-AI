const pool = require("../config/db");

// Get All Devices
const getDevices = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM devices ORDER BY id ASC"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// Add Device
const addDevice = async (req, res) => {
  try {
    const {
      asset_number,
      device_name,
      manufacturer,
      model,
      serial_number,
      department,
      status,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO devices
      (asset_number, device_name, manufacturer, model, serial_number, department, status)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [
        asset_number,
        device_name,
        manufacturer,
        model,
        serial_number,
        department,
        status,
      ]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  getDevices,
  addDevice,
};