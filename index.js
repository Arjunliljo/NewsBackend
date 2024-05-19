const express = require("express");
const articleRouts = require("./routs/articleRouts");
const authorRouts = require("./routs/authorRouts");
const app = express();
const port = 3000;

app.use(cors());

app.use("/article", articleRouts);
app.use("/author", authorRouts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
