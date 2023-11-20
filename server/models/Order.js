const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    buyItems:Array,
    rentItems:Array,
    totalBuyPrice:Number,
    totalRentPrice:Number,
    username:String
});
const Order=mongoose.model("Order", OrderSchema);
module.exports =Order