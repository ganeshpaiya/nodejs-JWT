require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const fa_admin =require("./app/routes/fa_admin/login.controller");
global.__basedir = __dirname + "/..";

const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

// parse requests of content-type: application/json
app.use(bodyParser.json());


// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/li/commonscript.routes.js")(app);
require("./app/routes/fa_admin/register.routes.js")(app);
require("./app/routes/fa_admin/login.routes.js")(app);
require("./app/routes/li/liupload.routes.js")(app);

//app.use("/api/login",fa_admin);
//require("./app/routes/customer.routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});