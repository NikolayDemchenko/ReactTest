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
        unit: ObjectId
    },
    quantity: {
        _id: false,
        values: [{
            _id: false,
            value: Number,
            updated: { type: Date, default: Date.now }
        }],
        Unit: ObjectId
    },
    delivery: [ObjectId],
    payment: [ObjectId],
    location: Object,
    specsSheets: [
        {
            _id: ObjectId,
            specs: [
                {
                    _id: ObjectId,
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
