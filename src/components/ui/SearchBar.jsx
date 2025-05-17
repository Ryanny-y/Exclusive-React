import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export default function SearchBar() {
  const { searchProduct, setSearchProduct } = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const [showUserOption, setShowUserOption] = useState(false);
  const userOptionClass = `${
    showUserOption ? "block" : "hidden"
  } absolute top-10 right-0 w-52 pl-5 bg-transparent pr-3 py-4 rounded-sm flex flex-col gap-2 text-white before:absolute before:blur bg-blur before:top-1 before:bottom-0 before:right-0 before:w-52 before:-z-10`;
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const navigate = useNavigate();

  //* EFFECT TO CHANGE THE CART LENGTH WHENEVER THE CART CHANGED
  useEffect(() => {
    setCartLength(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    setWishlistLength(wishlistItems.length);
  }, [wishlistItems]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      navigate("/Products");
    }
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-5 basis-80 grow">
      <div className="relative grow w-full">
        <input
          className="w-full py-2.5 px-5 outline-none text-sm font-medium rounded-md placeholder:text-xs bg-secondaryLight"
          type="text"
          placeholder="What are you looking for?"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          onKeyDown={(e) => handleInput(e)}
        />
        <FontAwesomeIcon
          className="absolute top-1/2 -translate-y-1/2 right-3"
          icon={faMagnifyingGlass}
          onClick={() => navigate("/Products")}
        />
      </div>

      <div className="flex gap-5 items-center ml-auto">
        <Link to="wishlist" className="relative">
          <FontAwesomeIcon icon={faHeart} className="text-xl h-text-red" />
          {isAuthenticated && wishlistLength > 0 && (
            <h1 className="absolute text-white bg-primaryRed -top-2 -right-3 h-4 w-4 rounded-full text-xs flex items-center justify-center">
              {wishlistLength}
            </h1>
          )}
        </Link>
        <Link to="cart" className="relative">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl h-text-red -mr-1"
          />
          {isAuthenticated && cartLength > 0 && (
            <h1 className="absolute text-white bg-primaryRed -top-2 -right-3 h-4 w-4 rounded-full text-xs flex items-center justify-center">
              {cartLength}
            </h1>
          )}
        </Link>

        {isAuthenticated && (
          <div className="relative z-50">
            <button
              className="text-base bg-primaryRed text-white py-0.5 px-2 rounded-full"
              onClick={() => setShowUserOption((cur) => !cur)}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <ul className={userOptionClass}>
              <li className="h-text-red">
                <Link to="/account">
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Manage My
                  Account
                </Link>
              </li>
              <li className="h-text-red">
                <Link to="/orders"> My Order</Link>
              </li>
              <li className="h-text-red">
                <Link> My Cancellations</Link>
              </li>
              <li className="h-text-red">
                <Link> My Reviews</Link>
              </li>
              <li className="h-text-red">
                {/* Link */}
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
