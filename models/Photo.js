const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const photoModel = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    senderUserId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("photo", photoModel);
