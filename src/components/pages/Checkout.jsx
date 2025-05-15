import SmallHeader from '../ui/SmallHeader'
import useFindMatchingProduct from '../../utils/hooks/useFindMatchingProduct';
import useScrollToTop from '../../utils/hooks/useScrollToTop'
import useRedirect from '../../utils/hooks/useRedirect';
import { useState, useContext } from 'react';
import { getDiscountedPrice } from '../../utils/currency';
import { AuthContext } from '../../context/AuthContext';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';

export default function Checkout() {

  useRedirect();

  const { productDetails, subtotal, shippingFee, total } = useFindMatchingProduct();
  const { userData, accessToken, uri } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const { setShowPopUp } = useContext(ProductContext);

  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ houseNumber, setHouseNumber ] = useState('');
  const [ townCity, setTownCity ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ saveInfo, setSaveInfo ] = useState(false);
  const [ selectedOption, setSelectedOption ] = useState('bank');

  useScrollToTop();
  const headers = ['Home', 'Checkout'];

  const valueSetter = (setter, value) => {
    setter(value);
  }

  const handleCheckout = async (e) => {
    e.preventDefault();
    if(!productDetails.length) {
      setShowPopUp('Cart is empty!');
      return;
    };

    try {
      const orderItems = productDetails.map(product => {
        return { productId: product.productId, quantity: product.quantity, subtotal: (getDiscountedPrice(product.price, product.discount) * product.quantity)};
      })
      
      const response = await fetch(`${uri}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          userId: userData?.id,
          order_items: orderItems,
          subtotal,
          shipping_fee: shippingFee,
          total,
          payment_method: selectedOption
        }),
        credentials: 'include'
      });
      
      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg)
      }
      
      const data = await response.json();
      setShowPopUp('Products Ordered!');

      // clear cart here
      clearCart();

    } catch (error) {
      setShowPopUp(`Something went wrong: ${error.message}`)
    }
  }

  return (
    <main className="checkout pt-20 pb-28">
      <div className="container mx-auto flex flex-col gap-20">
        <SmallHeader headers={headers}/>

        <section className="biliing-section flex flex-col sm:flex-row justify-between gap-20">
          <aside className="billing basis-80 flex-grow">
            <h1 className='font-bold text-3xl tracking-wide mb-12'>Billing Details</h1>
            <form 
              onSubmit={handleCheckout}
              id='billing-form' 
              className='flex flex-col gap-8 w-full'
            >
              <label htmlFor="first-name">
                <p className='font-medium text-secondaryGray mb-2'>First Name</p>

                <input 
                  type="text" 
                  value={firstname}
                  onChange={(e) => valueSetter(setFirstname, e.target.value)}
                  required 
                  name="first-name" 
                  id="first-name" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>
              
              <label htmlFor="last-name">
                <p className='font-medium text-secondaryGray mb-2'>Last Name</p>
                <input 
                  type="text" 
                  value={lastname}
                  onChange={(e) => valueSetter(setLastname, e.target.value)}
                  required 
                  name="last-name" 
                  id="last-name" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>

              <label htmlFor="street-address">
                <p className='font-medium text-secondaryGray mb-2'>Street Address</p>
                <input 
                  type="text" 
                  value={address}
                  onChange={(e) => valueSetter(setAddress, e.target.value)}
                  required 
                  name="street-address" 
                  id="street-address" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>

              <label htmlFor="house-number">
                <p className='font-medium text-secondaryGray mb-2'>Apartment, floor, etc. (optional)</p>
                <input 
                  type="text" 
                  value={houseNumber}
                  onChange={(e) => valueSetter(setHouseNumber, e.target.value)}
                  name="house-number" 
                  id="house-number" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>

              <label htmlFor="town-city">
                <p className='font-medium text-secondaryGray mb-2'>Town/City</p>
                <input 
                  type="text" 
                  value={townCity}
                  onChange={(e) => valueSetter(setTownCity, e.target.value)}
                  required 
                  name="town-city" 
                  id="town-city" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>
              <label htmlFor="phone-number">
                <p className='font-medium text-secondaryGray mb-2'>Phone Number</p>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => valueSetter(setPhoneNumber, e.target.value)}
                  required 
                  name="phone-number" 
                  id="phone-number" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>
              <label htmlFor="email-address">
                <p className='font-medium text-secondaryGray mb-2'>Email Address</p>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => valueSetter(setEmail, e.target.value)}
                  required 
                  name="email-address" 
                  id="email-address" 
                  className='bg-secondaryLight p-2 outline-none w-full'
                />
              </label>
              <label htmlFor="save-info" className='flex items-center gap-3'>
                <input 
                  type="checkbox" 
                  checked={saveInfo}
                  onChange={() => setSaveInfo(prev => !prev)}
                  name="save-info" 
                  id="save-info"
                />
                <p className='text-sm'>Save this information for faster check-out next time</p>
              </label>
            </form>
          </aside>

          <div className='basis-1/2 flex flex-col gap-9'>
            {/* PRODUCT CONTAINER */}
            {productDetails.length 
            ? <div className="product-container flex flex-col gap-8 w-full">
              {productDetails.map(product => (
                <div key={product._id} className='flex items-center justify-start gap-6 font-medium'>
                  <img src={`${uri}/image/${product.images[0]}`} alt="Product img" className='h-10 w-10' />
                  <p>{product.name}</p>
                  <p className='ml-auto'>${(getDiscountedPrice(product.price, product.discount)) * product.quantity}</p>
                </div>
              ))}
              </div> :
              <div className='font-bold text-3xl'>No Products To Checkout</div>
            }

            {/* SHIPPIGN DETAILS */}
            <div className="shipping-details flex flex-col gap-4 font-medium">
              <p className='flex justify-between'>
                <span>Subtotal: </span>
                <span>${subtotal}</span>
              </p>
              <hr className='h-0.5 w-full bg-primaryGray' />
              <p className='flex justify-between' >
                <span>Shipping: </span>
                <span>{shippingFee ? '$99' : 'FREE'}</span>
              </p>
              <hr className='h-0.5 w-full bg-primaryGray' />
              <p className='flex justify-between' >
                <span>Total: </span>
                <span>${total}</span>
              </p>
            </div>

            {/* PAYMENT OPTION */}
            <div className='payment-options flex flex-col gap-4 font-medium'>
              <div className="bank flex items-center gap-2">
                <input 
                  type="radio"
                  required
                  checked={selectedOption == 'bank'}
                  name='payment-option'
                  value='bank'
                  onChange={() => setSelectedOption('bank')}
                  id='bank' 
                  className='accent-primaryRed h-4 w-4'
                />
                <label htmlFor="bank">Bank</label>
                <span className="flex gap-2 items-center ml-auto">
                  <img src="images/logo/Bkash.png" alt="Bank image" className='h-6 w-10'/>
                  <img src="images/logo/Visa.png" alt="Bank image" className='h-6 w-10'/>
                  <img src="images/logo/Mastercard.png" alt="Bank image" className='h-6 w-10'/>
                  <img src="images/logo/Nagad.png" alt="Bank image" className='h-6 w-10'/>
                </span>
              </div>
              <div className="c-o-d flex items-center gap-2">
                <input 
                  type="radio"
                  required
                  name='payment-option' 
                  value='cod'
                  onChange={() => setSelectedOption('cod')}
                  id='cod' 
                  className='accent-primaryRed h-4 w-4'
                />
                <label htmlFor="cod">Cash on delivery</label>
              </div>

              {/* COUPON */}
              <div className="coupon flex gap-5">
                <input 
                  type="text" 
                  name="coupon-input"
                  id="coupon-input" 
                  className="py-3 px-4 border-2 border-secondaryGray rounded-md outline-none text-sm flex-grow basis-1/2" placeholder='Coupon Code'
                />
                <button className="apply-coupon bg-primaryRed text-white px-4 py-3 font-semibold flex-grow rounded-md h-bg-red">Apply Coupon</button>
              </div>

              <button type='submit' form='billing-form' className="apply-coupon bg-primaryRed text-white px-12 py-3 font-semibold self-start rounded-sm h-bg-red">Place Order</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}