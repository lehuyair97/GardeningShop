const mongoose = require('mongoose');
const QandASchema = new mongoose.Schema({
    question:{
        type:String,
    },
    answer:{
        type:String
    }
})

const QandA = mongoose.model('QandA',QandASchema);
module.exports = QandA;