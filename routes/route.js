const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.status(200).json({ msg: "This is server about router!!!" });
});

module.exports = router;
