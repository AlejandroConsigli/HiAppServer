const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json("Server says hi!");
});

module.exports = router;
