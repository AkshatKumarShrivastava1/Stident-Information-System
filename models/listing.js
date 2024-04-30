const mongoose = require("mongoose");
const { number } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name: {
    type: String,
    required:true,
  },
  enrollment_no: {type:String,
    required:true,
    unique:true,
  },
  description: String,
  image: {
    url:String,
    filename:String,
  },
  age: Number,
  address: String,
  cgpa: Number,
  owner : {
    type:Schema.Types.ObjectId,
    ref:"User",
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;