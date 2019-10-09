const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => console.log("listening on port" + port));
