import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating }) {
    const [{ basket}, dispatch] = useStateValue();

     const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
     }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__title">{title}</div>

        <p className="checkoutProduct__price">
            <big>₹</big>
            <big><strong>{price}</strong></big>

        </p>
        <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button  onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct