const express = require("express");
const router = express.Router();
const {
  verifyTokenMiddleWare,
} = require("../middleware/verifyTokenMiddleware");

const {
  getNotes,
  postNotes,
  putNotes,
  deleteNotes,
} = require("../controllers/notes");

router
  .route("/")
  .get(verifyTokenMiddleWare, getNotes)
  .post(verifyTokenMiddleWare, postNotes);
router
  .route("/:id")
  .put(verifyTokenMiddleWare, putNotes)
  .delete(verifyTokenMiddleWare, deleteNotes);

module.exports = router;
