import { createContext, useState, useEffect } from "react";
import useFetchData from "../utils/hooks/useFetchData";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {

  const productsUrl = 'http://localhost:3500/products';

  const [ products, setProducts ] = useState([]);
  const [ searchProduct, setSearchProduct ] = useState('');
  const [ loaded, setLoaded ] = useState(false)
  
  const { data, error, isLoading } = useFetchData(productsUrl);
  useEffect(() => {
    if(data.length && !error && !isLoading) {
      setProducts(data);
      setLoaded(true)
    }
  }, [data, error, isLoading])

  const contextValue = {
    products, setProducts,
    searchProduct, setSearchProduct
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {loaded ? children : <div>loading...</div>}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
