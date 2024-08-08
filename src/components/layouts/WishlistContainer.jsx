import SectionSlider from '../ui/sliders/SectionSlider';
import ProductContainer from '../ui/ProductContainer';
import { useState } from 'react';

export default function WishlistContainer({header}) {
  
  const isWishlist = header === 'Wishlist';

  const [ productDetails, setProductDetails ] = useState([
    // {
    //   id: '1',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 160,
    //   discountPercent: .6,
    //   ratings: {
    //     stars: 5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '2',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 19099,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 4.5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '3',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 160,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '4',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 19099,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 4.5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '5',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 160,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '6',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 19099,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 4.5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '7',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 160,
    //   discountPercent: .6,
    //   ratings: {
    //     stars: 5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '8',
    //   images: ['HAVIT Hv-G92 Gamepad.png'],
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 19099,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 4.5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '9',
    //   image: 'HAVIT Hv-G92 Gamepad.png',
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 160,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '10',
    //   image: 'HAVIT Hv-G92 Gamepad.png',
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 19099,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 4.5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '11',
    //   image: 'HAVIT Hv-G92 Gamepad.png',
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 160,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 5,
    //     count: 88
    //   },
    // },
    // {
    //   id: '12',
    //   image: 'HAVIT Hv-G92 Gamepad.png',
    //   name: 'HAVIT HV-G92 Gamepad',
    //   originalPrice: 19099,
    //   discountPercent: .40,
    //   ratings: {
    //     stars: 4.5,
    //     count: 88
    //   },
    // },
  ]);

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
          {!isWishlist && <div className='h-10 w-5 bg-primaryRed rounded-md'></div>}
          {header} ({productDetails.length})
        </h1>

        <button className="py-2 px-8 justify-self-end self-end md:py-4 md:px-12 font-medium border-2 border-secondaryGray rounded-md">{isWishlist ? 'Move All To Bag' : 'See All'}</button>
      </div>

      <SectionSlider breakpoints={breakpoints}>
        {productDetails.map(product => (
          <swiper-slide key={product.id}>
            <ProductContainer productDetails={product}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </section>
  )
}