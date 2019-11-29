const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const InstanceScheme = new mongoose.Schema({
    templateId: ObjectId,
    price: {
        values: [{
            value: Number,
            updated: { type: Date, default: Date.now }
        }],
        Unit: ObjectId
    },
    quantity: {
        values: [{
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
    ]
}, { versionKey: false });

module.exports = mongoose.model("instance", InstanceScheme);
