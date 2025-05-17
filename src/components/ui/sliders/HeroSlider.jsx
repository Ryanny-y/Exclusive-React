import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

export default function HeroSlider() {
  
  const arrSlides = new Array(5).fill(null);

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
        {arrSlides.map((_, i) => 
          <swiper-slide key={i}>
            <div className="flex justify-between p-10 relative">
              <aside className="flex flex-col gap-5 z-10">
                <h1 className='text-lg font-light flex items-center gap-4'><FontAwesomeIcon icon={faApple} className='text-5xl'/> iPhone 14 Series</h1>
                <h1 className='text-4xl md:text-6xl font-semibold'>Up to 10% <br/> off Voucher</h1>
                <Link to="/products" className='underline underline-offset-8 flex items-center gap-2'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
              </aside>

              <div className="img-container absolute right-0">
                <img src="images/logo/hero_iphone.png" alt="iphone img" />
              </div>
            </div>
          </swiper-slide>
        )}
      </swiper-container>
    </div>
  );
};
