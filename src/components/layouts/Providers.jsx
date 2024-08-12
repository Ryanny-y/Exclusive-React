import ProductProvider from '../../context/ProductContext';
import CartProvider from '../../context/CartContext';
import WishlistProvider from '../../context/WishlistContext';

export default function Providers({ children }) {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            { children }
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </>
  )
};