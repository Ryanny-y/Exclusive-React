import SmallHeader from "../ui/SmallHeader"
import Services from "../sections/Services"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faStore, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FaDollarSign  } from 'react-icons/fa';
import AboutService from "../layouts/AboutService"
import useScrollToTop from '../../utils/hooks/useScrollToTop';

export default function About() {

  const headers = ['Home', 'About']

  useScrollToTop();

  return (
    <main className="about pt-20 pb-28">
      <div className="container mx-auto flex flex-col gap-16">
        <SmallHeader headers={headers}/>

        <section className="relative py-32" data-aos="fade-up" data-aos-delay="100">
          <div className="text-justify flex flex-col gap-6 w-full md:w-525 bg-white py-10 px-5 rounded-md bg-opacity-90">
            <h1 className="font-bold tracking-wide text-6xl mb-4">Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>

          <div className="side-img absolute top-0 right-0 h-full bg-blue-200 -z-10 left-0 sm:left-1/3 lg:left-1/2">
            <img src="images/logo/Side Image 2.png" alt="" className="h-full w-full"/>
          </div>
        </section>
        
        <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 justify-center gap-8 text-center" data-aos="fade-up" data-aos-delay="100">
          <AboutService icon={<FontAwesomeIcon icon={faStore} />} service='10.5k ' description='Sellers active in our site'/>
          <AboutService icon={<FaDollarSign />} service='33k ' description='Monthly Product sale'/>
          <AboutService icon={<FontAwesomeIcon icon={faBagShopping} />} service='45k ' description='Customer active in our site'/>
          <AboutService icon={<FontAwesomeIcon icon={faSackDollar} />} service='25k ' description='Annual gross in our site'/>
        </section>

        <Services />
      </div>
      
    </main>
  )

};