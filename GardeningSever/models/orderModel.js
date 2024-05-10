const mongoose = require("mongoose");
const moment = require("moment");

const orderModel = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerPhoneNumber: {
    type: String,
    required: true,
  },
  deliveryMethod: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  shippingFee: {
    type: Number,
    required: true,
  },
  estimatedDeliverytime: {
    type: String,
    required: true,
  },
  totalBill: {
    type: Number,
    required: true,
  },
  selectedCarts: {
    type: Array,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  orderDate: {
    type: String,
    default: () => moment().format("dddd, DD/MM/YYYY HH:mm:ss"),
  },
  isWatched: {
    type: Boolean,
    default: false,
  },
});

// Tạo model từ schema
const Order = mongoose.model("Order", orderModel);

module.exports = Order;
