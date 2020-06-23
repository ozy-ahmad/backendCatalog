let express = require("express");
let router = express.Router();
const axios = require("axios");
const parser = require("xml2json");

/* GET home page. */
router.get("/", function (req, res, next) {
  const url = "https://api.flickr.com/services/feeds/photos_public.gne";
  axios
    .get(url)
    .then((response) => {
      //console.log(response.data);
      var jsonStr = parser.toJson(response.data); //return xml response into json string
      //console.log("to json -> %s", jsonStr);
      res.json(JSON.parse(jsonStr)); //return string into json
    })
    .catch((err) => {
      res.status(400).json({ status: err, message: "cannot get data" });
    });
});
module.exports = router;
