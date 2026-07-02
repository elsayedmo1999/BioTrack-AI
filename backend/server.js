const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "biotrack_ai",
    password: "sozek@74",
    port: 9904,
});
pool.connect()
    .then(() => console.log("✅ PostgreSQL Connected"))
    .catch(err => console.error("❌ Database Error:", err));

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            message: "BioTrack AI Server is Running",
            time: result.rows[0]
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
});

app.get("/devices", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM devices");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
});

app.post("/devices", async (req, res) => {
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

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/devices", async (req, res) => {
  try {
    const {
      asset_number,
      device_name,
      manufacturer,
      model,
      serial_number,
      department,
      status
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
        status
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.post("/devices", async (req, res) => {
  try {
    const {
      asset_number,
      device_name,
      manufacturer,
      model,
      serial_number,
      department,
      status
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
        status
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});