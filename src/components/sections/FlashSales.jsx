import { useEffect, useState } from "react"
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from "../ui/sliders/SectionSlider";
import ProductContainer from "../ui/ProductContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Countdown from "../ui/Countdown";


export default function FlashSales() {
  
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
    {
      id: '5',
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
      id: '6',
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

  const prevBtn = (
    <FontAwesomeIcon icon={faArrowLeft} className="p-3 bg-secondaryLight rounded-full flash-sales prev-btn"/>
  )

  const nextBtn = (
    <FontAwesomeIcon icon={faArrowRight} className="p-3 bg-secondaryLight rounded-full flash-sales next-btn"/>
  )

  return (
      <SectionContainer classname="flash-sales">
        <SectionHeader sectionTitle="Today's" sectionHeader='Flash Sales'>
          <Countdown />

          <div className="flex items-center gap-2 self-end grow justify-end">
            {prevBtn}
            {nextBtn}
          </div>
        </SectionHeader>
          
        <SectionSlider breakpoints={breakpoints} prevBtn=".flash-sales.prev-btn" nextBtn=".flash-sales.next-btn">
          {productDetails.map(product => (
            <swiper-slide key={product.id} >
              <ProductContainer productDetails={product}/>
            </swiper-slide>
          ))}
        </SectionSlider>

        <button className="bg-primaryRed text-light py-4 px-12 self-center rounded-sm hover:bg-secondaryRed">View All Product</button>
      </SectionContainer>
  )

};