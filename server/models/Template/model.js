const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId;

const scheme = new mongoose.Schema({
    name:String,
    folderId: String,
    specsSheets: [
        {
            name: String,
            specs: [
                {
                    name: String,
                    unit: ObjectId
                }
            ]
        }
    ],
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Template', scheme);