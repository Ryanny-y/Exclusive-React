import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between md:justify-start gap-5 sm:gap-12 font-medium text-nowrap grow basis-1/3">
      <Link className="h-text-red" to="/Exclusive-React/">Home</Link>
      <Link className="h-text-red" to="contact">Contact</Link>
      <Link className="h-text-red" to="about">About</Link>
      <Link className="h-text-red" to="signup">Sign Up</Link>
    </nav>
  )
}