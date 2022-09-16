const mongoose = require('mongoose');
const Schema = {
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20
    },
    status: {type:String},
}
const task_schema = new mongoose.Schema(
    Schema, {
    timestamps: true
});

module.exports = mongoose.model('Task', task_schema)