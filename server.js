const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/build"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
