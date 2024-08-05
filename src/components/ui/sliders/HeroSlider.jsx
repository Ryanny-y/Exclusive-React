
export default function HeroSlider() {
  
  return (
    <div className="slider-container flex-grow h-80 md:h-auto w-32 basis-3/5 text-light bg-black">
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        className='hero'

        style={{
          height: '100%',
          "--swiper-pagination-color": "#DB4444",
          "--swiper-pagination-bullet-inactive-color": "#7D8184",
          "--swiper-pagination-bullet-inactive-opacity": '1'
        }}>
        <swiper-slide>Slide1</swiper-slide>
        <swiper-slide>Slide2</swiper-slide>
        <swiper-slide>Slide3</swiper-slide>
        <swiper-slide>Slide4</swiper-slide>
        <swiper-slide>Slide5</swiper-slide>
      </swiper-container>
    </div>
  );
};
