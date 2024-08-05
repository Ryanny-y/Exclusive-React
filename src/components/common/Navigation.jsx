import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-5 sm:gap-12 font-medium text-nowrap grow basis-1/3">
      <Link to="/Exclusive-React/">Home</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About</Link>
      <Link to="signup">Sign Up</Link>
    </nav>
  )
}