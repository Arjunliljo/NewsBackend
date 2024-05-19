const express = require("express");

const {
  getArticle,
  updateArticle,
  addArticle,
  deleteArticle,
} = require("../controllers/articleController");

const router = express().Router();

router.get("/article", getArticle);

router.post("/article/:articleId", addArticle);

router.patch("/article", updateArticle);

router.delete("/article/:articleId", deleteArticle);

module.exports = router;
