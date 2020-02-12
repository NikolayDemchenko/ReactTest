const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const scheme = new mongoose.Schema(
  {
    name: String,
    parentId: ObjectId,
    visible: Boolean,
    filter: Boolean,
    updated: { type: Date, default: new Date() }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Element", scheme);
