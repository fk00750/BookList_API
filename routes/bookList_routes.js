const express = require("express");
const router = express.Router();
const {
  getAllbooks,
  getSinglebook,
  Createbook,
  deletebook,
  updatebook,
} = require("../controller/booklist_controller");

router.route("/").get(getAllbooks).post(Createbook);
router.route("/:id").get(getSinglebook).delete(deletebook).patch(updatebook);

module.exports = router;
