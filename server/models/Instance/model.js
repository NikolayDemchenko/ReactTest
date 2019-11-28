const mongoose = require('mongoose')

const InstanceScheme = new mongoose.Schema({
    templateId: ObjectId,
    price:Number,
    priceUnit:ObjectId,
    quantity:Number,
    quantityUnit:ObjectId,
    delivery:[ObjectId],
    payment:[ObjectId],
    location:Object,
    specsSheets: [
        {
            _id:ObjectId,
            specs: [
                {
                    _id:ObjectId,
                    value: Object
                }
            ]
        }
    ]
}, { versionKey: false });

module.exports = mongoose.model("instance", InstanceScheme);
