import SmallHeader from '../ui/SmallHeader'
import useFindMatchingProduct from '../../utils/hooks/useFindMatchingProduct';
import useScrollToTop from '../../utils/hooks/useScrollToTop'

export default function Checkout() {
  
  const { productDetails, subtotal, shippingFee, total } = useFindMatchingProduct();

  useScrollToTop();
  const headers = ['Home', 'Checkout']

  return (
    <main className="checkout pt-20 pb-28">
      <div className="container mx-auto flex flex-col gap-20">
        <SmallHeader headers={headers}/>

        <section className="biliing-section flex flex-col-reverse sm:flex-row justify-between gap-20">
          <aside className="billing basis-80 flex-grow">
            <h1 className='font-bold text-3xl tracking-wide mb-12'>Billing Details</h1>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if(!productDetails.length) {
                  alert('Please Log in and Add items to cart');
                  return;
                }
              }}
              id='billing-form' 
              className='flex flex-col gap-8 w-full'
            >
              <label htmlFor="first-name">
                <p className='font-medium text-secondaryGray mb-2'>First Name</p>
                <input type="text" required name="first-name" id="first-name" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="last-name">
                <p className='font-medium text-secondaryGray mb-2'>Last Name</p>
                <input type="text" required name="last-name" id="last-name" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="street-address">
                <p className='font-medium text-secondaryGray mb-2'>Street Address</p>
                <input type="text" required name="street-address" id="street-address" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="houst-number">
                <p className='font-medium text-secondaryGray mb-2'>Apartment, floor, etc. (optional)</p>
                <input type="text" name="houst-number" id="houst-number" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="town-city">
                <p className='font-medium text-secondaryGray mb-2'>Town/City</p>
                <input type="text" required name="town-city" id="town-city" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="phone-number">
                <p className='font-medium text-secondaryGray mb-2'>Phone Number</p>
                <input type="tel" required name="phone-number" id="phone-number" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="email-address">
                <p className='font-medium text-secondaryGray mb-2'>Email Address</p>
                <input type="email" required name="email-address" id="email-address" className='bg-secondaryLight p-2 outline-none w-full'/>
              </label>
              <label htmlFor="save-info" className='flex items-center gap-3'>
                <input type="checkbox" name="save-info" id="save-info"/>
                <p>Save this information for faster check-out next time</p>
              </label>
            </form>
          </aside>

          <div className='basis-1/2 flex flex-col gap-9'>
            {/* PRODUCT CONTAINER */}
            {productDetails.length 
            ? <div className="product-container flex flex-col gap-8 w-full">
              {productDetails.map(product => (
                <div className='flex items-center justify-start gap-6 font-medium'>
                  <img src={`https://exclusive-api.onrender.com/image/${product.images[0]}`} alt="Product img" className='h-10 w-10' />
                  <p>{product.name}</p>
                  <p className='ml-auto'>${product.price}</p>
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
              <line className='h-0.5 w-full bg-primaryGray'></line>
              <p className='flex justify-between' >
                <span>Shipping: </span>
                <span>{shippingFee ? '$99' : 'FREE'}</span>
              </p>
              <line className='h-0.5 w-full bg-primaryGray'></line>
              <p className='flex justify-between' >
                <span>Total: </span>
                <span>${total}</span>
              </p>
            </div>

            {/* PAYMENT OPTION */}
            <div className='payment-options flex flex-col gap-4 font-medium'>
              <div className="bank flex items-center gap-2">
                <input type="radio" name='payment-option' value='bank' id='bank' className='accent-primaryRed h-4 w-4'/>
                <label htmlFor="bank">Bank</label>
                <span className="flex gap-2 items-center ml-auto">
                  <img src="images/logo/Bkash.png" alt="Bank image" className='h-6 w-10'/>
                  <img src="images/logo/Visa.png" alt="Bank image" className='h-6 w-10'/>
                  <img src="images/logo/Mastercard.png" alt="Bank image" className='h-6 w-10'/>
                  <img src="images/logo/Nagad.png" alt="Bank image" className='h-6 w-10'/>
                </span>
              </div>
              <div className="c-o-d flex items-center gap-2">
                <input type="radio" name='payment-option' value='cod' id='cod' className='accent-primaryRed h-4 w-4'/>
                <label htmlFor="cod">Cash on delivery</label>
              </div>

              {/* COUPON */}
              <div className="coupon flex gap-5">
                <input type="text" name="coupon-input" id="coupon-input" className="py-3 px-4 border-2 border-secondaryGray rounded-md outline-none text-sm flex-grow basis-1/2" placeholder='Coupon Code'/>
                <button className="apply-coupon bg-primaryRed text-white px-4 py-3 font-semibold flex-grow rounded-md">Apply Coupon</button>
              </div>

              <button type='submit' form='billing-form' className="apply-coupon bg-primaryRed text-white px-12 py-3 font-semibold self-start rounded-sm">Place Order</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}