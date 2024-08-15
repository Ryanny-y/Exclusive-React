import { useEffect, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import { getDiscountedPrice } from "../currency";

export default function useFindMatchingProduct() {
  const [productDetails, setProductDetails] = useState([]);
  const { products } = useContext(ProductContext);
  const { cartItems } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const matchingProducts = cartItems.map(item => {
      const match = products.find(product => product._id === item.productId);
      return { ...match, ...item };
    });

    setProductDetails(matchingProducts);

    // CALCULATE THE CART TOTAL OF THE PRODUCTS
    const subtotal = matchingProducts.reduce((acc, cur) => acc + (getDiscountedPrice(cur.price, cur?.discount) * cur.quantity), 0);
    setSubtotal(subtotal);
    
    const newShipping = subtotal < 140 ? 99 : 0;
    setShippingFee(newShipping);
    setTotal(subtotal + newShipping);
  }, [cartItems, products]);

  return { productDetails, subtotal, shippingFee, total };
}