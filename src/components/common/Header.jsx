import Navigation from "./Navigation";
import SearchBar from '../ui/SearchBar';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="pt-20 md:pt-16 pb-2 border-b border-dark fixed top-0 right-0 left-0 z-40 bg-white">
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-3">
        <Link to='/' className="basis-40 md:basis-54 flex items-center flex-grow text-center xs:text-start shrink-0">
          <img src="/images/logo/exclusive_logo.PNG" alt="Exclusive logo" className="h-10 w-10"/>
          <h1 className="text-black font-bold text-2xl">Exclusive</h1>
        </Link>
        <Navigation />
        <SearchBar />
      </div>
    </header>
  )
}