import { Link } from "react-router-dom"

export default function TopHeader() {
  
  return (
    <header className="bg-dark z-50 fixed top-0 right-0 left-0">
      <div className="text-center container mx-auto relative flex flex-col sm:flex-row items-center justify-center text-light text-14 py-3 gap-1 sm:gap-2">
        <p className="sm:text-nowrap">Summer Sale For All Swim Suite And Free Express Delivery - OFF 50%</p>
        <Link to='products' className="font-semibold underline">ShopNow</Link>
      </div>
    </header>
  )
}