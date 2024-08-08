import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from "../ui/sliders/SectionSlider";
import ProductContainer from '../ui/ProductContainer';
import { useState } from "react";

export default function ExploreProduct() {

  const [ productDetails, setProductDetails ] = useState([
    {
      id: '1',
      images: ['HAVIT Hv-G92 Gamepad.png'],
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
      images: ['HAVIT Hv-G92 Gamepad.png'],
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
      images: ['HAVIT Hv-G92 Gamepad.png'],
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
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 19099,
      discountPercent: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
    {
      id: '5',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountPercent: .40,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '6',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 19099,
      discountPercent: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
    {
      id: '7',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountPercent: .6,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '8',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 19099,
      discountPercent: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
    {
      id: '9',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountPercent: .40,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '10',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 19099,
      discountPercent: .40,
      ratings: {
        stars: 4.5,
        count: 88
      },
    },
    {
      id: '11',
      images: ['HAVIT Hv-G92 Gamepad.png'],
      name: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountPercent: .40,
      ratings: {
        stars: 5,
        count: 88
      },
    },
    {
      id: '12',
      images: ['HAVIT Hv-G92 Gamepad.png'],
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
    0: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 1,
      spaceBetween: 30
      },
    768: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 3,
      spaceBetween: 15
    },
    406: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 2,
      spaceBetween: 10
    }, 
  }
  
  return (
    <SectionContainer classname="our-products">
      <SectionHeader sectionTitle='Our Products' sectionHeader="Explore Our Products">
        {/* Insert navigation */}
      </SectionHeader>

      <SectionSlider breakpoints={breakpoints}>
        {productDetails.map(product => (
          <swiper-slide key={product.id} >
            <ProductContainer productDetails={product}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </SectionContainer>
  )
}