import WishlistContainer from "../layouts/WishlistContainer";
import useRedirect from '../../utils/hooks/useRedirect';
import useScrollToTop from '../../utils/hooks/useScrollToTop'
import { useState, useContext, useEffect, useMemo } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import { ProductContext } from '../../context/ProductContext'

export default function Wishlist() {
  useScrollToTop();
  useRedirect();

  // WISHLIST PRODUCTS
  const { wishlistItems } = useContext(WishlistContext);
  const { products } = useContext(ProductContext);
  // const [ wishlistProducts, setWishlistProducts ] = useState([]);

  const wishlistProducts = useMemo(() => {
    return wishlistItems.map(item => {
          const matchingProduct = products.find(product => product._id === item.productId);
          return matchingProduct;
        })
  }, [wishlistItems, products])

  // JUST FOR YOU PRODUCTS
  const [ jfyProducts, setJfyProducts ] = useState([]);
  useEffect(() => {
    const filteredCategory = wishlistItems.map(item => {
      const matchingProduct = products.find(product => product._id === item.productId);
      return matchingProduct.category;
    })
    const combinedArray = filteredCategory.flat();
    const removedDuplicate = combinedArray.filter((item, i) => combinedArray.indexOf(item) === i);

    // FIND THE MATCHING PRODUCT THAT HAS THE SAME CATEGORY
    const filteredProducts = products.filter(product => 
      product?.category.some(category => 
        removedDuplicate.some(item => category.includes(item))
      )
    );
    
    const jfyProductArr = filteredProducts.filter(product => 
      !wishlistItems.some(item => item.productId === product._id)
    );
    
    setJfyProducts(jfyProductArr);
  }, [wishlistItems])

  return (
    <main className="wishlist" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto py-20 flex flex-col gap-20">
        <WishlistContainer header='Wishlist' productList={wishlistProducts}/>

        <WishlistContainer header='Just For You' productList={jfyProducts} isJfy={true}/>
      </div>
    </main>
  )
} 