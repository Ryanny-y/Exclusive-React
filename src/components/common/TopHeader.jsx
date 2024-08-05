import { Link } from "react-router-dom"

export default function TopHeader() {
  
  return (
    <header className="bg-dark">
      <div className="text-center container mx-auto relative flex flex-col sm:flex-row items-center justify-center text-light text-14 py-3 gap-1 sm:gap-2">
        <p className="sm:text-nowrap">Summer Sale For All Swim Suite And Free Express Delivery - OFF 50%</p>
        <button className="font-semibold underline">ShopNow</button>
      </div>
    </header>
  )
}