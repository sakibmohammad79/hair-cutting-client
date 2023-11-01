import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
const CheckoutForm = ({cart, price}) => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() =>  {
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
      //console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret);
    })
    }
  },[price, axiosSecure]);

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      setError('');
      //console.log('[PaymentMethod]', paymentMethod);
    }
    
    setProcessing(true);

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || 'annonymous',
            email: user?.email || 'unknown'
          },
        },
      },
    );
    if(confirmError){
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;

      //save payment information
      const paymentInfo = {
        email: user?.email,
        name: user?.name,
        transactionId,
        price,
        date: new Date(),
        quantity: cart.length,
        serviceNames: cart.map(service => service.name),
        serviceCartId: cart.map(service => service._id),
        serviceId: cart.map(service => service.serviceId),
        orderStatus: 'service pending',
      }
      axiosSecure.post('/payments', paymentInfo)
      .then(res => {
        //console.log(res.data);
        if(res.data.paymentHistoryInsertResult
          .insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'payment history has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  };
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-secondary btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
       {error && <p className="text-red-500">{error}</p>}
       {transactionId && <p className="text-green-500">Yur payment complete with transaction Id: {transactionId} </p>}
      </form>
    );
};

export default CheckoutForm;