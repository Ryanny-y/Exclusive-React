import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Notifications = () => {

  const { showPopUp, setShowPopUp } = useContext(ProductContext);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    if(showPopUp) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setShowPopUp('');
        }, 1500);
      }, 800);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [showPopUp])

  return (
    <>
      {showPopUp && <div className={`block added-to-wishlist fixed top-1/2 left-1/2 h-100 w-100 text-white text-center font-bold -translate-x-1/2 -translate-y-1/2 px-5 rounded-md py-8 text-base`} style={{ background: 'rgba(100, 100, 100, .8)'}}>
        {loading 
          ? <p>Loading...</p>
          : <p>{showPopUp}</p>
        }
      </div>}
    </>
  )
}

export default Notifications
