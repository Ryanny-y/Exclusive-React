import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function SideNav() {
  return (
    <nav className="sidenav flex text-nowrap flex-wrap md:flex-col gap-4 font-medium basis-full md:basis-54">
      <Link to="products/category=Women's Fashion" className='h-text-red w-40 md:w-full flex items-center justify-between pr-2'> 
        <span>Women's Fashion</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
      <Link to="products/category=Men's Fashion" className='h-text-red w-40 md:w-full flex items-center justify-between pr-2'>
        <span>Men's Fashion</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
      <Link to="products/category=Electronics" className='h-text-red w-40'>
        <span>Electronics</span>
      </Link>
      <Link to="products/category=Home and LifeStyle" className='h-text-red w-40'>
        <span>Home & LifeStyle</span>
      </Link>
      <Link to="products/category=Medicine" className='h-text-red w-40'>
        <span>Medicine</span>
      </Link>
      <Link to="products/category=Sports and Outdoor" className='h-text-red w-40'>
        <span>Sports & Outdoors</span>
      </Link>
      <Link to="products/category=Baby's and Toys" className='h-text-red w-40'>
        <span>Baby's & Toys</span>
      </Link>
      <Link to="products/category=Groceries and Pets" className='h-text-red w-40'>
        <span>Groceries & Pets</span>
      </Link>
      <Link to="products/category=Health and Beauty" className='h-text-red w-40'>
        <span>Health & Beauty</span>
      </Link>
    </nav>
  )
}