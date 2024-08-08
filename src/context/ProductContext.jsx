import { createContext, useState } from "react";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [ products, setProducts ] = useState([]);
  const [ searchProduct, setSearchProduct ] = useState('');

  const contextValue = {
    searchProduct, setSearchProduct
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
