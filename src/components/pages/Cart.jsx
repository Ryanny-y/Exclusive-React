import { useContext } from "react";
import SmallHeader from "../ui/SmallHeader";
import CartProduct from "../ui/CartProduct";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import useRedirect from "../../utils/hooks/useRedirect";
import useScrollToTop from '../../utils/hooks/useScrollToTop';
import useFindMatchingProduct from "../../utils/hooks/useFindMatchingProduct";

export default function Cart() {
  useScrollToTop();
  
  // context
  const { updateCartQuantity } = useContext(CartContext)

  // const items
  const { productDetails, subtotal, shippingFee, total } = useFindMatchingProduct();
  useRedirect();

  const handleQuantityChange = (productId, quantity) => {
    updateCartQuantity(productId, quantity)
  };

  const headers = ['Home', 'Cart'];
  return (
    <main className="not-found pt-20 pb-28" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex flex-col gap-20">
        <SmallHeader headers={headers} />

        <section className="orders w-full sm:w-11/12 mx-auto flex flex-col gap-10">
          <div className="order-header grid grid-cols-4">
            <h1>Product</h1>
            <h1 className="justify-self-center">Price</h1>
            <h1 className="justify-self-center">Quantity</h1>
            <h1 className="justify-self-end">Subtotal</h1>
          </div>

          <div className="order-containers flex flex-col gap-10">
            {productDetails.map(product => (
              <CartProduct key={product._id} productDetails={product} handleQuantityChange={handleQuantityChange}/>
            ))}
          </div>

          <div className="cart-btns display flex items-center justify-between text-nowrap flex-wrap gap-2 font-semibold">
            <Link to='/Exclusive-React/' className="py-4 border border-secondaryGray rounded-sm text-center w-full xs:w-54 hover:text-white hover:bg-primaryRed duration-200">Return To Shop</Link>
          </div>
        </section>

        <section className="payment flex flex-wrap items-start justify-between gap-10 lg:gap-32">
          <div className="coupon flex flex-wrap gap-4 flex-grow">
            <input type="text" className="border py-3 px-4 text border-secondaryGray rounded-md placeholder:text-sm flex-grow" placeholder="Coupon Code" />
            <button className="bg-primaryRed text-white py-3 px-10 h-bg-red font-medium rounded-md grow sm:grow-0 basis-48">Apply Coupon</button>
          </div>

          <div className="cart-total flex flex-col gap-6 py-6 px-8 border border-dark rounded-md basis-5/12 flex-grow lg:grow-0">
            <h1 className="text-lg font-semibold">Cart Total</h1>
            <p className="flex items-center justify-between"><span>Subtotal:</span> ${subtotal}</p>

            <hr className="h-0.5 bg-dark" />
            <p className="flex items-center justify-between"><span>Shipping:</span> {shippingFee ? `$${shippingFee}` : 'FREE'}</p>

            <hr className="h-0.5 bg-dark" />
            <p className="flex items-center justify-between"><span>Total:</span> ${total}</p>

            <Link to='/Exclusive-React/checkout' className="self-center bg-primaryRed text-white font-semibold rounded-md py-4 px-12">Proceed To Checkout</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
