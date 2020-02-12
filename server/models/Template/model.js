const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const scheme = new mongoose.Schema(
  {
    name: String,
    parentId: ObjectId,
    updated: { type: Date, default: new Date() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Template", scheme);
