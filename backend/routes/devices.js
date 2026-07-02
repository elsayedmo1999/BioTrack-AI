const express = require("express");
const router = express.Router();

const {
  getDevices,
  addDevice,
} = require("../controllers/deviceController");

router.get("/", getDevices);
router.post("/", addDevice);

module.exports = router;