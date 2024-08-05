import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SectionSlider from "../ui/sliders/SectionSlider";
import CategoryBox from "../ui/CategoryBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faDesktop, faCamera, faHeadphones, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { MdWatch } from 'react-icons/md';

export default function Category() {

  const categories = [
    {
      id: '1',
      name: 'Phones',
      path: 'about',
      icon: <FontAwesomeIcon icon={faMobileScreenButton}/>,
    },
    {
      id: '2',
      name: 'Computers',
      path: '/exclusive/',
      icon: <FontAwesomeIcon icon={faDesktop}/>,
    },
    {
      id: '3',
      name: 'SmartWatch',
      path: '/exclusive/',
      icon: <MdWatch />,
    },
    {
      id: '4',
      name: 'Camera',
      path: '/exclusive/',
      icon: <FontAwesomeIcon icon={faCamera} />,
    },
    {
      id: '5',
      name: 'Headphones',
      path: '/exclusive/',
      icon: <FontAwesomeIcon icon={faHeadphones} />,
    },
    {
      id: '6',
      name: 'Gaming',
      path: '/exclusive/',
      icon: <FontAwesomeIcon icon={faGamepad} />
    },
    {
      id: '7',
      name: 'Gaming',
      path: '',
      icon: <FontAwesomeIcon icon={faGamepad} />
    }
  ];  
  
  const breakpoints = {
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    720: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    864: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 6,
        spaceBetween: 30,
    }
  }
 
  return (
    <SectionContainer classname="category">
      <SectionHeader sectionTitle="Categories" sectionHeader='Browse By Category' > 
        {/* Insert a Navigation for the slider */}
      </SectionHeader>

      <SectionSlider breakpoints={breakpoints}>
        {categories.map(category => (
          <swiper-slide key={category.id} >
            <CategoryBox category={category}/>
          </swiper-slide>
        ))}
      </SectionSlider>
    </SectionContainer>
  )
  
}