import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function ViewProductBtn({ isWishlist, productId }) {

  const btnClass = `p-1 bg-light absolute ${isWishlist ? 'top-2' : 'top-12'}  rounded-full right-2 hover:text-primaryRed`
  return ( 
    <Link to={`/product/${productId}`}>
      <button className={btnClass} style={{width: '34px', height: '34px'}}><FontAwesomeIcon icon={faEye} /></button>
    </Link>
  )
};