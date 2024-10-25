const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

// this is like import
const laptopRouter = require("./routes/laptop-routes");

app.use(cors());

// ================================================ Body Parser===== use to read body data
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded =============== body eke form-data read karann oni code=== takeby : bodyParser
app.use(bodyParser.urlencoded());
// parse application/json  =============================== body eke json read karann oni code  ===    takeby : bodyParser
app.use(bodyParser.json());

app.use("/laptop", laptopRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
