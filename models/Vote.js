const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    os:{
        type:String,
        required:true
    },
  //points as Number to be an incremental field
    points :{
        type:Number,
        default:0
    }
})
// Create collection and add schema
const Vote = mongoose.model('vote',VoteSchema);
module.exports = Vote;
