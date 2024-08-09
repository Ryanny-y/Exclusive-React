import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useScrollToTop from '../../../utils/hooks/useScrollToTop';

export default function AddToCartBtn({hovered}) {
  const btnClass = `${hovered ? 'bottom-0' : '-bottom-10'} absolute left-0 right-0 py-2 bg-black font-semibold text-white rounded-bl-md rounded-br-md duration-200 hover:bg-primaryRed`
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);


  const handleAddToCart = () => {
    if(!isAuthenticated) {
      navigate('login');
      return;
    }

    
  };

  return (
    <button className={btnClass} onClick={handleAddToCart}>Add To Cart</button>
  )
}