let express = require("express");
let router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  const url = "https://api.flickr.com/services/feeds/photos_public.gne";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);

      res.send("");
      //res.json(response))
    })
    .catch((err) => {
      console.log(err);

      res.status(400).json({ status: "error", message: err });
    });
});

module.exports = router;
