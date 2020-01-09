const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId;

const scheme = new mongoose.Schema({
    name:String,
    parentId: ObjectId,
    specsSheets: [
        {
            name: String,
            specs: [
                {
                    name: String,
                    unitId: ObjectId
                }
            ]
        }
    ],
    updated: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Template', scheme);