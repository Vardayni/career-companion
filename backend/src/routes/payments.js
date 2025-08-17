import { Router } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import Payment from '../models/Payment.js';

const router = Router();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body; // in INR rupees
  const order = await razorpay.orders.create({
    amount: Math.round(amount * 100), // to paise
    currency: 'INR',
    receipt: 'rcpt_' + Date.now()
  });
  await Payment.create({ orderId: order.id, amount, status: 'created' });
  res.json({ orderId: order.id, key: process.env.RAZORPAY_KEY_ID, amount: order.amount, currency: order.currency });
});

// Webhook for payment updates
export async function paymentsWebhook(req, res) {
  const signature = req.headers['x-razorpay-signature'];
  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(req.body)
    .digest('hex');

  if (signature !== expected) return res.status(400).send('Invalid signature');

  const event = JSON.parse(req.body.toString());
  if (event.event === 'payment.captured') {
    const paymentId = event.payload.payment.entity.id;
    const orderId = event.payload.payment.entity.order_id;
    await Payment.findOneAndUpdate({ orderId }, { paymentId, status: 'paid', meta: event });
  }
  return res.json({ received: true });
}

export default router;