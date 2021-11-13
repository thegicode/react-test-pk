const express = require("express");
const app = express();
const port = 3300

app.use("/", express.static(__dirname + "/"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})