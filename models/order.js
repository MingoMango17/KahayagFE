import mongoose, { Schema, model, models } from 'mongoose'


const OrderSchema = new mongoose.Schema({
    orders: [
      {
        quantity: Number,
        name: String,
        subtotal: Number,
      },
    ],
    orderType: String,
    paymentMode: String,
    totalPrice: Number,
    orderID: String,
  });

  export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
