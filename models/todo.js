const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    todo: {
        type:String,
        required:true,
        defailt:"You Missed to add title of ToDO"
    },
    date:{
        type:Object,
        default:Date
    },
    completed:{
        type:Boolean,
        default:false
    }
  },
  { collection: "Todo" },
);

module.exports = mongoose.model("Todo", Schema);
