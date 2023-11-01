import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../Components/Heading/Heading";
import useCart from "../../../Hook/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
const Payment = () => {
   const [mycart] = useCart();
   const amount = mycart.reduce((sum, current)=> sum+current.price, 0);
   const price = parseFloat(amount.toFixed(2));
   //console.log('payment Prce', price);
    return (
        <div className="w-[500px] mx-auto">
            <Heading heading={"Payment"} subHeading={"Process Payment"}></Heading>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={mycart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;