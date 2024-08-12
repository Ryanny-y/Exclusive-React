import ProductProvider from '../../context/ProductContext';
import CartProvider from '../../context/CartContext';

export default function Providers({ children }) {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          { children }
        </CartProvider>
      </ProductProvider>
    </>
  )
};