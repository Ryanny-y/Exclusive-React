import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function WishlistBtn() {

  return (
    <Link to='/'>
      <button className='p-1 bg-light absolute top-2 rounded-full right-2 hover:text-primaryRed' style={{width: '34px', height: '34px'}}><FontAwesomeIcon icon={faHeart} /></button>
    </Link>
  )
}