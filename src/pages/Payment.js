import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {useLocation } from "react-router-dom";
import HeaderOnly from "../components/header/HeaderOnly";
import CheckoutForm from "../components/Content/CheckoutForm";
import "../pages/Payment.css";
const stripePromise = loadStripe("pk_test_51KxvQ2BSKt3wku4PPuiNLpmlGfa9NbHEVgP7P33tx6mh8sfSECHeydezzetpxWwmFnX9lnIKqjrpQPyraynHDKnT00Pj2AkV2r");

const Payement = ({token, setNameModal, setToggleModal}) => {
    const location = useLocation();
    const {product_name, product_price} = location.state;
  return <div>
        <HeaderOnly token={token} setToggleModal={setToggleModal} setNameModal={setNameModal}/>
            <div className="resumeOrder">
                <Elements className="details" stripe={stripePromise}>
                    <CheckoutForm
                         product_name={product_name}
                        product_price={product_price}
                    />
                </Elements>
            </div>
        </div>

    
  
}

export default Payement;