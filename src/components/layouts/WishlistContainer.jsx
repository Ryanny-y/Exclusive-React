import SectionSlider from '../ui/sliders/SectionSlider';
import ProductContainer from '../ui/ProductContainer';

export default function WishlistContainer({ header, productList, isJfy = false }) {
  
  const wishlistHeader = header === 'Wishlist';

  const breakpoints= {
    480: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    864: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 30,
    }
  }

  return (
    <section className="wishlist flex flex-col gap-16">
      <div className="flex items-center justify-between flex-wrap text-nomwrap">
        <h1 className="text-xl font-semibold relative flex items-center gap-4">
          {!wishlistHeader && <div className='h-10 w-5 bg-primaryRed rounded-md'></div>}
          {header} ({productList.length})
        </h1>

        <button className="py-2 px-8 justify-self-end self-end md:py-4 md:px-12 font-medium border-2 border-secondaryGray rounded-md">{wishlistHeader ? 'Move All To Bag' : 'See All'}</button>
      </div>

      <SectionSlider breakpoints={breakpoints}>
        {productList.map(product => (
          <swiper-slide key={product._id}>
            <ProductContainer productDetails={product} isWishlist={true} isJfy={isJfy}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </section>
  )
}