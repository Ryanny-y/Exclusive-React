import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom' 
import { AuthContext } from "../../context/AuthContext";

export default function SearchBar() {
  const { searchProduct, setSearchProduct } = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [ showUserOption, setShowUserOption ] = useState(false);
  const userOptionClass = `${showUserOption ? 'block' : 'hidden'} absolute top-10 right-0 w-52 pl-5 bg-transparent pr-3 py-4 rounded-sm flex flex-col gap-2 text-white before:absolute before:blur bg-blur before:top-1 before:bottom-0 before:right-0 before:w-52 before:-z-10`

  return (
    <div className="flex items-center justify-end gap-5 basis-80 grow">
      <div className="relative grow">
        <input 
          className="w-full py-2.5 px-5 outline-none text-sm font-medium rounded-md placeholder:text-xs bg-secondaryLight"
          type="text"
          placeholder="What are you looking for?"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-3" icon={faMagnifyingGlass} />
      </div>

      <Link to='wishlist'><FontAwesomeIcon icon={faHeart} className="text-xl h-text-red"/></Link>
      <Link to='cart'><FontAwesomeIcon icon={faCartShopping} className="text-xl h-text-red -mr-1"/></Link>

      {isAuthenticated && 
        <div className="relative">
          <button className="text-base bg-primaryRed text-white w-8 h-8 rounded-full" onClick={() => setShowUserOption(cur => !cur)}><FontAwesomeIcon icon={faUser} /></button>
          <ul className={userOptionClass}>
            <li className="h-text-red">
              <Link><FontAwesomeIcon icon={faUser} className="mr-2"/> Manage My Account</Link>
            </li>
            <li className="h-text-red">
              <Link> My Order</Link>
            </li>
            <li className="h-text-red">
              <Link> My Cancellations</Link>
            </li>
            <li className="h-text-red">
              <Link> My Reviews</Link>
            </li>
            <li className="h-text-red">
              {/* Link */}
              <Link to='/logout'> Logout</Link>
            </li>
          </ul>
        </div>
      }
      
    </div>
  )
}