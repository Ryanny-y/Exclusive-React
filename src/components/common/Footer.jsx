import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

  return (
    <footer className="Footer bg-dark text-white py-16">
      <div className="container mx-auto flex gap-20 flex-wrap justify-start">
        <div className="flex flex-col gap-4 basis-52 shrink-0 grow md:grow-0">
          <h1 className="font-bold text-xl">Exclusive</h1>
          <h5 className="font-semibold text-lg">Subscribe</h5>
          <p>Get 10% off your first order</p>
          <span className="email-input relative border border-white rounded-sm text-white">
            <input 
              type="text" 
              className="w-full bg-transparent text-xs py-2 outline-none px-3"
              placeholder="Enter your email"
            />
            <FontAwesomeIcon icon={faChevronRight} className="absolute top-1/2 -translate-y-1/2 right-3"/>
          </span>
        </div>

        <div id="support" className="flex flex-col gap-4 basis-48 shrink-0 grow md:grow-0">
          <h1 className="font-medium">Support</h1>
          <address>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</address>
          <p>exclusive@gmail.com</p>
          <a href="tel:+88015-88888-9999" className="h-text-red">+88015-88888-9999</a>
        </div>

        <div id="account" className="flex flex-col gap-4 shrink-0 grow md:grow-0">
          <h1 className="font-medium">My Account</h1>
          <Link to='/' className="h-text-red">Account</Link>
          <Link to='/' className="h-text-red">Login / Register</Link>
          <Link to='/' className="h-text-red">Cart</Link>
          <Link to='/' className="h-text-red">Wishlist</Link>
          <Link to='/' className="h-text-red">Shop</Link>
        </div>

        <div id="quick-link" className="flex flex-col gap-4 md:basis-40 grow md:grow-0">
          <h1 className="font-medium">Quick Link</h1>
          <Link to='/' className="h-text-red">Privacy Policy</Link>
          <Link to='/' className="h-text-red">Term Of Use</Link>
          <Link to='/' className="h-text-red">FAQ</Link>
          <Link to='/' className="h-text-red">Contact</Link>
        </div>

        <div id="download" className="flex flex-col gap-4 basis-52 grow-0">
          <h1 className="font-medium">Download App</h1>
          <p className="text-secondaryGray text-xs font-semibold">Save $3 with App New user Only</p>
          <div class="grid grid-cols-[100px_100px] grid-rows-[repeat(2,_45px)] gap-1">
            <img src="images/logo/Qrcode 1.png" class="col-span-1 row-span-2 w-full h-full" alt="Qr Code" />
            <img src="images/logo/GooglePlay.png" class="col-start-2 row-start-1 w-60 h-full" alt="Google Play" />
            <img src="images/logo/AppStore.png" class="col-start-2 row-start-2 w-60 h-full" alt="App Store" />
          </div>
          <div className="socials flex gap-6">
            <Link to='/' className="h-text-red"><FontAwesomeIcon icon={faFacebookF} /></Link>
            <Link to='/' className="h-text-red"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to='/' className="h-text-red"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to='/' className="h-text-red"><FontAwesomeIcon icon={faLinkedin} /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}