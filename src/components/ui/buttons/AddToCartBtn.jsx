import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function AddToCartBtn({hovered, productId}) {
  const btnClass = `${hovered ? 'bottom-0' : '-bottom-10'} absolute left-0 right-0 py-2 bg-black font-semibold text-white rounded-bl-md rounded-br-md duration-300 hover:bg-primaryRed`
  const navigate = useNavigate();
  const cartUrl = 'http://localhost:3500/cart';
  const [ added, setAdded ] = useState(false);

  const { userData: { userData, accessToken }, isAuthenticated } = useContext(AuthContext); 

  const handleAddToCart = async () => {
    if(!isAuthenticated) {
      navigate('login');
      return;
    }
    
    // handle userData logic
    try {
      const response = await fetch(cartUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData.id,
          productId
        }),
        credentials: 'include'
      })

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg)
      };

      const data = await response.json();

      // change to actual added
      console.log(productId)
      console.log(data);
      setAdded(true);
      setTimeout(() => {
        setAdded(false)
      }, 1500)
    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <button className={btnClass} onClick={handleAddToCart}>
      {added 
      ? <><FontAwesomeIcon icon={faCheck} /> Added To Cart</>
      : 'Add To Cart'}
      </button>
  )
}