let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
let logger = require("morgan");
let cors = require("cors");
require("dotenv").config();

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");

let app = express();

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

module.exports = app;
