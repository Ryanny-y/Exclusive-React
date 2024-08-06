import SectionContainer from '../layouts/SectionContainer'
import ServiceContainer from '../layouts/ServiceContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { IoShieldCheckmark  } from 'react-icons/io5';

export default function Services() {
  return (
    <SectionContainer classname='services'>
        <ul className='flex justify-center item-start gap-20 flex-wrap'>
          <ServiceContainer icon={<FontAwesomeIcon icon={faTruckFast} />} service='FREE AND FAST DELIVERY' description='Free for all orders over $140'></ServiceContainer>
          
          <ServiceContainer icon={<FontAwesomeIcon icon={faHeadset} />} service='24/7 CUSTOMER SERVICE' description='Friendly 24/7 support'></ServiceContainer>

          <ServiceContainer icon={<IoShieldCheckmark />} service='MONEY BACK GUARANTEE' description='We return money within 30 days'></ServiceContainer>
        </ul>
    </SectionContainer>
  )
}