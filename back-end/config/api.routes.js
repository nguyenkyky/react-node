var topPages = require("../controller/api/top_pages");
var express = require("express");
var router = express.Router();

router.get("/all", topPages.index);

module.exports = router;
