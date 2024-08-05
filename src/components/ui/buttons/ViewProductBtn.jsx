import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function ViewProductBtn() {

  return ( 
    <Link to='/'>
      <button className='p-1 bg-light absolute top-12 rounded-full right-2 hover:text-primaryRed' style={{width: '34px', height: '34px'}}><FontAwesomeIcon icon={faEye} /></button>
    </Link>
  )
};