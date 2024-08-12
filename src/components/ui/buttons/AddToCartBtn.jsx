import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function AddToCartBtn({hovered, productId}) {
  const btnClass = `${hovered ? 'bottom-0' : '-bottom-10'} absolute left-0 right-0 py-2 bg-black font-semibold text-white rounded-bl-md rounded-br-md duration-300 hover:bg-primaryRed`
  const [ added, setAdded ] = useState(false);
  const { addToCart } = useContext(CartContext);
  
  return (
    <button 
      className={btnClass} 
      onClick={() => {
        addToCart(productId);
        setAdded(true);
        setTimeout(() => {
          setAdded(false)
        }, 1500)
      }}
    >
      {added 
      ? <><FontAwesomeIcon icon={faCheck} /> Added To Cart</>
      : 'Add To Cart'}
      </button>
  )
}