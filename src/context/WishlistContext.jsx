import { useEffect, createContext, useState, useContext } from "react";
import { AuthContext } from './/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "./ProductContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const WishlistContext = createContext({});

const WishlistProvider = ({ children }) => {

  const { userData, isAuthenticated, accessToken } = useContext(AuthContext);
  const { setShowPopUp } = useContext(ProductContext);
  const [ wishlistDetails, setWishlistDetails ] = useState({});
  const [ wishlistItems, setWishlistItems ] = useState([]);
  const [ wishlistChange, setWishlistChange ] = useState(false);
  const navigate = useNavigate();

  //* FETCH DATA FROM THE WISHLIST AND STORE IT TO THE WISHLIST PRODUCTS
  useEffect(() => {
    if(isAuthenticated) {
      let isMounted = true;
      const controller = new AbortController();

      const fetchWishlistData = async () => {
        try {
          const response = await fetch(`https://exclusive-api.onrender.com/wishlist/${userData.id}`, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            credentials: 'include'
          });

          // HANDLE ERROR IF THE RESPONSE IS NOT OK
          if(!response.ok) {
            const errData = await response.json();
            const errMsg = errData.message || errData.statusText;
            throw new Error(errMsg);
          }
          
          const data = await response.json();
          if(isMounted) {
            setWishlistDetails(data);
            setWishlistItems(data.products)
          }
        } catch (error) {
          if(isMounted) {
            setShowPopUp(`Fetch Error: ${error.message}`);
          }
        }
      }
      
      fetchWishlistData();
      return () => {
        controller.abort();
        isMounted = false;
      }

    }
  }, [isAuthenticated, userData?.id, accessToken, wishlistChange]);

  //* ADD TO WISHLIST
  const addToWishlist = async (productId) => {
    if(!isAuthenticated) {
      navigate('/Exclusive-React/login');
      return;
    }

    try {
      const response = await fetch('https://exclusive-api.onrender.com/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData?.id,
          productId
        })
      })
      // HANDLE ERROR WHEN RESPONSE IS NOT OK
      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg)
      };
      
      const data = await response.json();
      setWishlistChange(prev => !prev);
      setShowPopUp(`Added To Wishlist`)
    } catch (error) {
      setShowPopUp(`Something Went Wrong: ${error.message}`);
    }
  };

  //* DELETE FROM WISHLIST
  const removeFromWishlist = async (productId) => {
    try {
      const response = await fetch('https://exclusive-api.onrender.com/wishlist', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData?.id,
          productId
        })
      })

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg)
      }
      const data = await response.json();
      setWishlistChange(prev => !prev);
      setShowPopUp(`Product Removed`);
    } catch (error) {
      setShowPopUp(`Something went wrong: ${error.message}`);
    }
  };

  const value = {
    wishlistDetails, wishlistItems, addToWishlist, removeFromWishlist,
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
};

export default WishlistProvider;  