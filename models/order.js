const mongoose = require("../mongoose");

// order schema
const orderSchema = new mongoose.Schema({
  pizzas: {
    type: [{ name: String, toppings: String, price: Number }],
    required: true,
    validate: {
      validator: function (pizzas) {
        return pizzas.length > 0;
      },
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return ["pending", "complete"].includes(v);
      },
      message: "Status must be pending or complete",
    },
  }
});

// create model from schema
const Orders = mongoose.model(orderSchema, "Orders");