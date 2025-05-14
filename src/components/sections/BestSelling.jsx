import { useState, useContext, useEffect } from "react";
import SectionContainer from '../layouts/SectionContainer';
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from '../ui/sliders/SectionSlider';
import ProductContainer from '../ui/ProductContainer';
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function BestSelling() {

  const { products } = useContext(ProductContext);

  const sortedProducts = products.sort((a, b) => a.ratings.count > b.ratings.count ? -1 : a.ratings.count < b.ratings.count ? 1 : 0).slice(0, 6);
  
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
        <Link to='/products' className="px-8 text-nowrap sm:px-10 md:px-12 py-4 font-medium bg-primaryRed text-white h-bg-red rounded-md self-end">
          View All
        </Link>  
      </SectionHeader>

      <SectionSlider breakpoints={breakpoints}>
        {sortedProducts.map(product => (
          <swiper-slide key={product._id}>
            <ProductContainer productDetails={product}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </SectionContainer>
  )
}