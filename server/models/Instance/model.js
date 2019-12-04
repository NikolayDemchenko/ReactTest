const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const InstanceScheme = new mongoose.Schema({
    templateId: ObjectId,
    price: {
        _id: false,
        values: [{
            _id: false,
            value: Number,
            updated: { type: Date, default: Date.now }
        }],
        unitId: ObjectId
    },
    quantity: {
        _id: false,
        values: [{
            _id: false,
            value: Number,
            updated: { type: Date, default: Date.now }
        }],
        unitId: ObjectId
    },
    delivery: [ObjectId],
    payment: [ObjectId],
    location: Object,
    specsSheets: [
        {
            _id: false,
            specsSheetId: ObjectId,
            specs: [
                {
                    _id: false,
                    specId: ObjectId,
                    value: Object
                }
            ]
        }
    ],
    updated: {
        type: Date, default: Date.now
    }
}, { versionKey: false });

module.exports = mongoose.model("instance", InstanceScheme);
