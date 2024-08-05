import Navigation from "./Navigation";
import SearchBar from '../ui/SearchBar';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="pt-10 pb-2 border-b border-dark">
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-3">
        <Link to='/' className="basis-40 md:basis-54 flex-grow text-center xs:text-start shrink-0"><h1 className="text-black font-bold text-2xl">Exclusive</h1></Link>
        <Navigation />
        <SearchBar />
      </div>
    </header>
  )
}