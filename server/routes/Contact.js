const express = require("express");
const router = express.Router();
const { contactMeController } = require("../controllers/ContactMe");

router.post("/contact", contactMeController);

module.exports = router;
