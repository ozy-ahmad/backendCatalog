const Photo = require("../models/Photo");

module.exports = {
  postPhoto: (req, res) => {
    userId = req.headers.userId;
    Photo.findById(userId)
      .then((result) => {
        Photo.create(userId, {
          fileName: req.body.fileName || result.fileName,
          image: (req.file && req.file.path) || result.image,
          senderUserId: req.body.senderUserId || result.senderUserId,
        })
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  },
  getData: (req, res) => {
    Photo.find({})
      .populate({
        path: "user",
        select: ["fileName", "image", "senderUserId"],
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(400).json(err));
  },
};
