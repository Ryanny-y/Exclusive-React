import SideNav from "../common/SideNav"
import HeroSlider from "../ui/sliders/HeroSlider"

export default function Hero() {

  return (
    <section className="Hero" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex flex-wrap justify-between gap-3 md:gap-14" >
        <SideNav />
        <HeroSlider />
      </div>
    </section>
  )
}