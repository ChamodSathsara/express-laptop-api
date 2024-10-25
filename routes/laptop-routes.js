const express = require("express");
const router = express.Router();

// this is like import
const {
  saveLaptop,
  getLaptop,
  deleteLaptop,
  updateLaptop,
} = require("../controller/laptop-controller");

router.get("/", getLaptop);
router.post("/", saveLaptop);
router.delete("/:id", deleteLaptop);
router.put("/:id", updateLaptop);

module.exports = router;
