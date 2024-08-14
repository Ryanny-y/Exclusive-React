import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({});

export default function CartProvider({children}) {

  const navigate = useNavigate();
  const { userData, isAuthenticated, accessToken } = useContext(AuthContext);
  const [ cartDetails, setCartDetails ] = useState({});
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartChanged, setCartChanged ] = useState(false);

  //* FETCH PRODUCT FROM THE DATABASE AND STORE IT ON CARTITEMS
  useEffect(() => { 
    if(isAuthenticated) {
      let isMounted = true;
      const controller = new AbortController();
    
      const fetchCartData = async () => {
        try {
          const response = await fetch(`https://exclusive-api.onrender.com/cart/${userData?.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            signal: controller.signal
          });
          if (!response.ok) {
            const errData = await response.json();
            const errMsg = errData.message || errData.statusText;
            throw new Error(errMsg);
          }
          const data = await response.json();
          if(isMounted) {
            setCartDetails(data);
            setCartItems(data.products);
          }
        } catch (error) {
          if(isMounted) {
            console.log('Fetch error:', error.message);
          }
        }
      };
    
      fetchCartData();
    
      // Clean up function
      return () => {
        isMounted = false;
        controller.abort();
      };
    }
  }, [isAuthenticated, userData?.id, accessToken, cartChanged])

  //* HANDLE ADD TO CART FUNCTION
  const addToCart = async (productId) => {
    // REDIRECT USERS TO LOGIN WHEN THEY ARE NOT AUTHENTICATED
    if(!isAuthenticated) {
      navigate('/Exclusive-React/login');
      return;
    }

    try {
      const response = await fetch('https://exclusive-api.onrender.com/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData?.id,
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
      setCartChanged(prev => !prev)

      // change to actual added
      console.log(productId)
      console.log(data);
      
    } catch (error) {
      console.log(error.message);
    }
  }

  //* HANDLE UPDATE CART QUANTITY
  const updateCartQuantity = async (productId, quantity) => {
    try {
      const response = await fetch(`https://exclusive-api.onrender.com/cart`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData?.id,
          productId,
          quantity
        }),
        credentials: 'include'
      });

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText();
        throw new Error(errMsg)
      }

      const data = await response.json();
      console.log(data);

      setCartChanged(prev => !prev)
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteFromCart = async (productId) => {
    try {
      const response = await fetch('https://exclusive-api.onrender.com/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData.id,
          productId
        }),
        credentials: 'include'
      });

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg);
      }

      const data = await response.json();
      console.log(data);

      setCartChanged(prev => !prev)
    } catch (error) {
      console.log(error.message)
    }
  };

  const value = {
    cartDetails, cartItems, addToCart, updateCartQuantity, deleteFromCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}