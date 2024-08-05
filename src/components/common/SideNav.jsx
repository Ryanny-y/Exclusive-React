import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function SideNav() {
  return (
    <nav className="sidenav flex text-nowrap flex-wrap md:flex-col gap-4 font-medium basis-full md:basis-54">
      <a href="" className='h-text-red w-40 md:w-full flex items-center justify-between pr-2'> 
        <span>Women's Fashion</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
      <a href="" className='h-text-red w-40 md:w-full flex items-center justify-between pr-2'>
        <span>Men's Fashion</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Electronics</span>
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Home & LifeStyle</span>
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Medicine</span>
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Sports & Outdoors</span>
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Baby's & Toys</span>
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Groceries & Pets</span>
      </a>
      <a href="" className='h-text-red w-40'>
        <span>Health & Beauty</span>
      </a>
    </nav>
  )
}