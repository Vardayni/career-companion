import mongoose from 'mongoose';
const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderId: String,
  paymentId: String,
  amount: Number,
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['created','paid','failed'], default: 'created' },
  meta: Object
}, { timestamps: true });
export default mongoose.model('Payment', PaymentSchema);