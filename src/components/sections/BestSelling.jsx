import { useState } from "react";
import SectionContainer from '../layouts/SectionContainer';
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from '../ui/sliders/SectionSlider';
import ProductContainer from '../ui/ProductContainer';
import { Link } from "react-router-dom";

export default function BestSelling() {

  const [ productDetails, setProductDetails ] = useState([
    {
      id: '1',
      image: 'images/product-image/HAVIT Hv-G92 Gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountPercent: .6,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '2',
      image: 'images/product-image/HAVIT Hv-G92 Gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 19099,
      discountPercent: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
    {
      id: '3',
      image: 'images/product-image/HAVIT Hv-G92 Gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountPercent: .40,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '4',
      image: 'images/product-image/HAVIT Hv-G92 Gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 19099,
      discountPercent: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
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
    <SectionContainer classname="best-selling">
      <SectionHeader sectionTitle="This Month" sectionHeader="Best Selling Products" >
        <Link to='about' className="px-8 text-nowrap sm:px-10 md:px-12 py-4 font-medium bg-primaryRed text-white hover:bg-secondaryRed rounded-md self-end">
          View All
        </Link>  
      </SectionHeader>

      <SectionSlider breakpoints={breakpoints}>
        {productDetails.map(product => (
          <swiper-slide key={product.id}>
            <ProductContainer productDetails={product}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </SectionContainer>
  )
}