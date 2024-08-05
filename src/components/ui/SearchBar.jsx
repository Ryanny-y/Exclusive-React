import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom' 

export default function SearchBar() {
  const { searchProduct, setSearchProduct } = useContext(ProductContext);

  return (
    <div className="flex items-center justify-end gap-6 basis-80 grow">
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
      <Link to='cart'><FontAwesomeIcon icon={faCartShopping} className="text-xl h-text-red"/></Link>
    </div>
  )
}