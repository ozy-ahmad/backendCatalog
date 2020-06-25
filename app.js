let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
let logger = require("morgan");
let cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let photoRouter = require("./routes/Photo");

let app = express();
const privateKey = process.env.PRIVATE_KEY;
mongodConnect = process.env.MONGOURI;
mongoose.connect(mongodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/photo", validateUser, photoRouter);

function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) => {
    if (err) {
      res.status(500).json(err);
    } else {
      req.body.userId = decoded.id; //tronsform token to be sent to req.body.userId
      req.headers.userId = decoded.id; //passing data using headers if body fail to pass
      next();
    }
  });
}
module.exports = app;
