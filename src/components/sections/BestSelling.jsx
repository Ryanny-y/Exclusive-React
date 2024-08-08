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
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      price: 160,
      discount: .6,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '2',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      price: 19099,
      discount: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
    {
      id: '3',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      price: 160,
      discount: .40,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '4',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      price: 19099,
      discount: .40,
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
        <Link to='about' className="px-8 text-nowrap sm:px-10 md:px-12 py-4 font-medium bg-primaryRed text-white h-bg-red rounded-md self-end">
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