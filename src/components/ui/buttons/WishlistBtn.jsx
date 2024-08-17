import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import { WishlistContext } from '../../../context/WishlistContext'

export default function WishlistBtn({ productId, isWishlist }) {

  const { addToWishlist } = useContext(WishlistContext);

  const btnClass = `${isWishlist && 'hidden'} p-1 bg-light absolute top-2 rounded-full right-2 hover:text-primaryRed`
  return (
    <>
      <button 
        className={btnClass} 
        style={{width: '34px', height: '34px'}}
        onClick={() => addToWishlist(productId)}
      > 
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </>
  )
}