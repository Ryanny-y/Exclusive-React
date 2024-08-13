import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from "../ui/sliders/SectionSlider";
import ProductContainer from '../ui/ProductContainer';
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function ExploreProduct() {

  const { products } = useContext(ProductContext);

  const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 16);

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

  const prevBtn = (
    <FontAwesomeIcon icon={faArrowLeft} className="p-3 bg-secondaryLight rounded-full our-products prev-btn"/>
  )

  const nextBtn = (
    <FontAwesomeIcon icon={faArrowRight} className="p-3 bg-secondaryLight rounded-full our-products next-btn"/>
  )
  
  return (
    <SectionContainer classname="our-products">
      <SectionHeader sectionTitle='Our Products' sectionHeader="Explore Our Products">
        {/* Insert navigation */}
        <div className="flex items-center gap-2 self-end grow justify-end">
          {prevBtn}
          {nextBtn}
        </div>
      </SectionHeader>

      <SectionSlider breakpoints={breakpoints} prevBtn=".our-products.prev-btn" nextBtn=".our-products.next-btn">
        {randomProducts.map(product => (
          <swiper-slide key={product._id} >
            <ProductContainer productDetails={product}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </SectionContainer>
  )
}