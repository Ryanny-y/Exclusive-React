import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTruck,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { ProductContext } from "../../context/ProductContext";
import SmallHeader from "../ui/SmallHeader";
import SectionTitle from "../ui/SectionTitle";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import { WishlistContext } from "../../context/WishlistContext";
import SectionSlider from "../ui/sliders/SectionSlider";
import ProductContainer from "../ui/ProductContainer";
import { AuthContext } from "../../context/AuthContext";

export default function ProductDetails() {
  useScrollToTop();
  // const variables
  const { productId } = useParams();
  const [quantityValue, setQuantityValue] = useState(1);
  const { products } = useContext(ProductContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [productDetails, setProductDetails] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { uri } = useContext(AuthContext);

  //* FIND THE MATCHING PRODUCT AND STORE IN A VARIABLE
  useEffect(() => {
    const matchingProduct = products.find(
      (product) => product._id === productId
    );
    setProductDetails(matchingProduct);
    setIsLoaded(true);
  }, [products, productId]);

  // find related products
  useEffect(() => {
    if (productDetails?.category?.length) {
      const categories = productDetails.category;
      const relatedProducts = products.filter((product) => {
        const productCategories = product.category;
        return productCategories.some((category) =>
          categories.includes(category)
        );
      });
      setRelatedProducts(relatedProducts);
    }
  }, [productDetails]);

  // handle increment
  const incrementQuantity = () => {
    setQuantityValue((prev) => prev + 1);
  };

  // handle decrement
  const decrementQuantity = () => {
    setQuantityValue((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  // Breakpoints SLider
  const breakpoints = {
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    864: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  const headers = ["Account", "Gaming", "Product Name"];

  return (
    <main
      className="product-details pt-48 pb-20 sm:py-20 lg:py-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container mx-auto flex flex-col gap-20">
        <SmallHeader headers={headers} />

        {!isLoaded ? (
          <p>Loading...</p>
        ) : (
          <section className="flex flex-col md:flex-row justify-between gap-20">
            <div className="product-img basis-1/2 shrink-0 bg-secondaryLight flex items-center justify-center p-10">
              <img
                src={`${uri}/image/${productDetails.images[0]}`}
                alt="Product Img"
                className="h-80"
              />
            </div>

            <div className="product-details flex flex-col gap-4 flex-grow basis-1/4">
              <h1 id="product-name" className="font-bold text-2xl">
                {productDetails.name}
              </h1>

              <span
                id="ratings"
                className="flex text-sm gap-2 items-center flex-wrap"
              >
                <img
                  src={`../images/ratings/rating-${
                    productDetails.ratings.stars * 10
                  }.png`}
                  alt="star"
                  className="w-20 h-4"
                />
                <p className="text-secondaryGray">
                  ({productDetails.ratings.count})
                </p>
                <p>|</p>
                <p className="text-buttonLime">{productDetails.stock_status}</p>
              </span>

              <h2 id="price" className="text-2xl">
                ${productDetails.price}
              </h2>

              <p id="description" className="text-stat">
                {productDetails.description}
              </p>

              <div className="line w-full h-0.5 bg-secondaryGray"></div>

              {productDetails.colors && (
                <span id="colours" className="flex items-center gap-2">
                  <p className="text-xl font-medium">Colours: </p>
                  {productDetails.colors.map((color) => (
                    <span
                      key={color}
                      className={`block h-4 w-4 border border-black border-spacing-5 rounded-full`}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </span>
              )}

              {productDetails.size && (
                <span id="size" className="flex items-center gap-2">
                  <p className="text-xl font-medium mr-2">Size: </p>
                  {productDetails.size.map((size) => (
                    <span
                      key={size}
                      className="block items-center p-1.5 border border-secondaryGray rounded-md text-sm"
                    >
                      {size.toUpperCase()}
                    </span>
                  ))}
                </span>
              )}

              {/* ORDER QUANTITY */}
              <div className="flex flex-wrap items-stretch justify-between gap-4">
                <div id="quantity" className="flex flex-grow basis-42">
                  <button
                    id="increment"
                    className="w-11 h-11 text-lg border border-secondaryGray rounded-tl-md rounded-bl-md hover:bg-primaryRed hover:text-white duration-200"
                    onClick={decrementQuantity}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="text"
                    value={quantityValue}
                    onChange={(e) => setQuantityValue(e.target.value)}
                    className="bg-transparent border-y border-secondaryGray flex-grow w-10 text-center outline-none"
                  />
                  <button
                    id="increment"
                    className="w-11 h-11 text-lg border border-secondaryGray rounded-tr-md rounded-br-md hover:bg-primaryRed hover:text-white duration-200"
                    onClick={incrementQuantity}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <button
                  id="buy-btn"
                  className="py-2 bg-primaryRed text-white h-bg-red font-semibold flex-grow rounded-md"
                >
                  Buy Now
                </button>

                <button
                  id="wishlist"
                  className="w-11 h-11 text-2xl border border-secondaryGray rounded-md hover:bg-primaryRed hover:text-white duration-200"
                  onClick={() => addToWishlist(productId)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>

              {/* SERVICES */}
              <div
                id="services"
                className="flex flex-col mt-5 rounded-md border border-black"
              >
                <div className="flex p-5 items-center gap-5">
                  <FontAwesomeIcon icon={faTruck} className="text-xl" />
                  <span>
                    <p className="font-semibold text-lg">Free Delivery</p>
                    <p className="underline text-sm">
                      Enter your postal code for Delivery Availability
                    </p>
                  </span>
                </div>

                <div className="flex p-5 items-center gap-5 border-t border-t-black">
                  <FontAwesomeIcon icon={faRotate} className="text-xl" />
                  <span>
                    <p className="font-semibold text-lg">Return Delivery</p>
                    <p className="text-sm">Free 30 Days Delivery Returns.</p>
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="related-items">
          <SectionTitle sectionTitle="Related Items" />

          <SectionSlider breakpoints={breakpoints}>
            {relatedProducts.map((product) => (
              <swiper-slide key={product._id}>
                <ProductContainer productDetails={product} isDetailed={true} />
              </swiper-slide>
            ))}
          </SectionSlider>
        </section>
      </div>
    </main>
  );
}
