import { useEffect, createContext, useState, useContext } from "react";
import { AuthContext } from './/AuthContext';

export const WishlistContext = createContext({});

const WishlistProvider = ({ children }) => {

  const { userData, isAuthenticated, accessToken } = useContext(AuthContext);
  const [ wishlistDetails, setWishlistDetails ] = useState({});
  const [ wishlistItems, setWishlistItems ] = useState([]);
  const [ wishlistChange, setWishlistChange ] = useState(false);

  //* FETCH DATA FROM THE WISHLIST AND STORE IT TO THE WISHLIST PRODUCTS
  useEffect(() => {
    if(isAuthenticated) {
      let isMounted = true;
      const controller = new AbortController();

      const fetchWishlistData = async () => {
        try {
          const response = await fetch(`http://localhost:3500/wishlist/${userData.id}`, {
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
            console.log(error.message);
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
    try {
      const response = await fetch('http://localhost:3500/wishlist', {
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
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  };

  //* DELETE FROM WISHLIST
  const removeFromWishlist = async (productId) => {
    try {
      const response = await fetch('http://localhost:3500/wishlist', {
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
      setWishlistChange(prev => !prev)
      console.log(data);
    } catch (error) {
      console.log(error.message)
    }
  };

  const value = {
    wishlistDetails, wishlistItems, addToWishlist, removeFromWishlist
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
};

export default WishlistProvider;  