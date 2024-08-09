import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from "../ui/sliders/SectionSlider";
import ProductContainer from '../ui/ProductContainer';
import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

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
  
  return (
    <SectionContainer classname="our-products">
      <SectionHeader sectionTitle='Our Products' sectionHeader="Explore Our Products">
        {/* Insert navigation */}
      </SectionHeader>

      <SectionSlider breakpoints={breakpoints}>
        {randomProducts.map(product => (
          <swiper-slide key={product._id} >
            <ProductContainer productDetails={product}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </SectionContainer>
  )
}