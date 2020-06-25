const User = require("../models/User");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  register: function (req, res, next) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    })
      .then((response) => res.json(response))
      .catch((err) => {
        throw err;
      });
  },
  login: function (req, res, next) {
    User.findOne({ email: req.body.email })
      .then((response, err) => {
        console.log(response);

        if (err) next(err);
        else {
          if (
            response !== null &&
            Bcrypt.compareSync(req.body.password, response.password)
          ) {
            jwt.sign(
              {
                id: response._id,
              },
              privateKey,
              (err, token) => {
                res.json({
                  status: "success",
                  data: {
                    token,
                  },
                });
              }
            );
          } else {
            res.json({
              status: "error",
              message: "User not found or password is wrong",
            });
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getAllData: (req, res, next) => {
    User.find({})
      .then((result) => {
        res.json({ status: "200", data: result });
      })
      .catch((err) => res.status(400).json(err));
  },
  getDataById: (req, res) => {
    User.findById(req.params.usersId)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
  deleteById: (req, res) => {
    User.findByIdAndRemove(req.params.usersId)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
