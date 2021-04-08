const express = require("express");
const bodyParser = require("body-parser");
const mysqlUtilities = require("./utilities/MysqlUtilities");
const app = express();
const port = 3005;

let cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.get("/admin", (req, res) => {
  mysqlUtilities.getAdmin((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
