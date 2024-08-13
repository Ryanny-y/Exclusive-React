
export default function SectionSlider({children, breakpoints = {}, prevBtn, nextBtn}) {
  
  return (
    <div className="slider-container gap-5">
      <swiper-container 
        navigation-next-el={nextBtn}
        navigation-prev-el={prevBtn}
        slidesPerView="1" 
        spaceBetween="30"
        breakpoints={ 
          JSON.stringify(breakpoints)}
        style={{
          height: '100%',
        }}
      >
        {children}
      </swiper-container>
    </div>
  );
}