import Hero from "../sections/Hero";
import FlashSales from "../sections/FlashSales";
import Category from "../sections/Category";
import BestSelling from "../sections/BestSelling";
import ExploreProduct from "../sections/ExploreProduct";
import Services from "../sections/Services";
import useScrollToTop from '../../utils/hooks/useScrollToTop';

export default function Home() {
  
  useScrollToTop();

  // gap-34
  return (
    <main className="py-10 flex flex-col gap-32" >
      <Hero />
      <FlashSales />
      <Category />
      <BestSelling />
      <ExploreProduct />
      <Services />
    </main>
  )
}