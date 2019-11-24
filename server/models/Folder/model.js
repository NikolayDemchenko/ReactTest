const mongoose = require('mongoose')
const userScheme = new mongoose.Schema({
    name: String,
    parentId: { type: String, default: null },
    updated: { type: Date, default: Date.now }
}, { versionKey: false });
module.exports = mongoose.model('Folder', userScheme);