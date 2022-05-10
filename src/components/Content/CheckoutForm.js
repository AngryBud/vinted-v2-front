// src/CheckoutForm.js
import { useState } from "react";
// import TopHeader from "../header/TopHeader";
import "./CheckoutForm.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({product_price, product_name}) => {
    const totalPrice = (product_price + 0.8 + 0.4).toFixed(2);
  const stripe = useStripe();
  const elements = useElements();
//   const resOrd = `Il ne vous reste plus qu'une etape pour vous offir ${product_name}. 
                    // Vous allez payer ${totalPrice} € (frais de protection et frais de port inclus)`

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try{
        event.preventDefault();
    // On récupère ici les données bancaires que l'utilisateur rentre
    const cardElement = elements.getElement(CardElement);

    // Demande de création d'un token via l'API Stripe
    // On envoie les données bancaires dans la requête
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "userID",
    });
    console.log("lololol",stripeResponse);
    const stripeToken = stripeResponse.token.id;
    // Une fois le token reçu depuis l'API Stripe
    // Requête vers notre serveur
    // On envoie le token reçu depuis l'API Stripe
    const response = await axios.post("https://vinted-v2-back.herokuapp.com/payement", 
    {
        token: stripeToken,
        title: product_name,
        amount: totalPrice,
    });
    if (response) {
        setCompleted(true);
      } else {
        alert("Le paiement a échoué.");
      }
    }catch (error) {
      console.log(error.message);
    }
  };

  return <div className="Checkout">
            <p className="resume">Resume Order</p>
                  <div className="bill">
                    <div className="line">
                      <p>Commande</p>
                      <p>{product_price} €</p>
                    </div>
                    <div className="line">
                      <p>Frais de protection acheteurs</p>
                      <p>0.40 €</p>
                    </div>
                    <div className="line">
                      <p>Frais de port</p>
                      <p>0.80 €</p>
                    </div>
                  </div>
                  
                    <div className="lineTot">
                        <p>Total</p>
                        <p>{totalPrice} €</p>
                    </div>
                    <div className="lineRes">
                        <p>Il ne vous reste plus qu'une etape pour vous offir <span>{product_name}</span>. 
                    Vous allez payer <span>{totalPrice}</span> € (frais de protection et frais de port inclus)</p>
                    </div>
                  {!completed ? (
                    <div className="cardForm">
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            <button type="submit" value="Confirmer">Valider</button>
                        </form>
                    </div>
                ) : (
                    <span>Paiement effectué ! </span>
                )}
                </div>
  
};

export default CheckoutForm;