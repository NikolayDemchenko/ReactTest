const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
const userScheme = new mongoose.Schema({
    name: String,
    parentId: { type: ObjectId, default: null },
    updated: { type: Date, default: Date.now }
}, { versionKey: false });
module.exports = mongoose.model('Folder', userScheme);