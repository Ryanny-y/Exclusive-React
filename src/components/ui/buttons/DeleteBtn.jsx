import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import { WishlistContext } from '../../../context/WishlistContext'; 

export default function DeleteBtn({ isWishlist, productId, isJfy }) {

  const { removeFromWishlist } = useContext(WishlistContext);
  const btnClass = `${isWishlist && isJfy && 'hidden'} p-1 bg-light absolute top-12 rounded-full right-2 hover:text-primaryRed`

  return (
    <button 
      className={btnClass} 
      style={{width: '34px', height: '34px'}}
      onClick={() => removeFromWishlist(productId)}
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  )
};