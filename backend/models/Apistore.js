const mongoose = require('mongoose')
const { Schema } = mongoose;

const ApiSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fields: {
        type: Array,
        required: true,

    },
    number: {
        type: Number,
        required: true
    },
    api: {
        type: Array,
        required: true
    },
    url: {
        type: String,
        default: ""
    }

});

const Api = mongoose.model('apis', ApiSchema);


module.exports = Api;