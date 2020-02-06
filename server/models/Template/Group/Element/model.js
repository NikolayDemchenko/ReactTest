const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const scheme = new mongoose.Schema(
  {
    name: String,
    parentId: ObjectId,
    visible: Boolean,
    filter: Boolean,
    updated: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Element", scheme);
