import { createContext, useState, useEffect } from "react";
import useFetchData from "../utils/hooks/useFetchData";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {

  const productsUrl = 'https://exclusive-api.onrender.com/products';

  const [ products, setProducts ] = useState([]);
  const [ searchProduct, setSearchProduct ] = useState('');
  const [ loaded, setLoaded ] = useState(false);
  
  const [ showPopUp, setShowPopUp ] = useState('');
  
  const { data, error, isLoading } = useFetchData(productsUrl);
  useEffect(() => {
    if(data.length && !error && !isLoading) {
      setProducts(data);
      setLoaded(true)
    }
  }, [data, error, isLoading])

  const contextValue = {
    products, setProducts,
    searchProduct, setSearchProduct,
    showPopUp, setShowPopUp
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {loaded ? children : <div className="container font-bold text-5xl sm:text-7xl h-96 text-center flex items-center justify-center">LOADING...</div>}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
