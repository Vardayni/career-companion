import { useEffect } from 'react';
import { api } from '../lib/apiClient';

export default function Pay() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  async function pay() {
    const { data } = await api.post('/api/payments/create-order', { amount: 199 }); // INR
    const options = {
      key: data.key,
      amount: data.amount,
      currency: data.currency,
      name: 'CareerPilot Pro',
      description: 'Pro plan',
      order_id: data.orderId,
      handler: function (response) {
        alert('Payment successful: ' + response.razorpay_payment_id);
        // Optionally, call backend to verify or record success
      },
      theme: { color: '#009688' }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <div className="p-10">
      <button onClick={pay} className="btn">Pay ₹199</button>
    </div>
  );
}