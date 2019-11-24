const mongoose = require('mongoose')

// const scheme = new mongoose.Schema({
//     name: String,
//     parentId: { type: String, default: null },
//     updated: { type: Date, default: Date.now } 
// }, { versionKey: false });

const scheme = new mongoose.Schema({
    name:String,
    folderId: String,
    specsSheets: [
        {
            name: String,
            specs: [
                {
                    name: String,
                    unit: String
                }
            ]
        }
    ],
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Template', scheme);