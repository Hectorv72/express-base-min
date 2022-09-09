const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("./src/databases/mongodb.connection");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setttings
app.set("port", process.env.PORT || 4000);

// Routes
app.use("/user", require("./src/routes/user.routes"));

app.listen(app.get("port"), () =>
  console.log(`Example app listening on port ${app.get("port")}!`)
);
