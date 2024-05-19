const express = require("express");

const {
  getAuthor,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

const router = express().Router();

router.get("/author", getAuthor);

router.post("/author/:authorId", addAuthor);

router.patch("/author", updateAuthor);

router.delete("/author/:authorId", deleteAuthor);

module.exports = router;
