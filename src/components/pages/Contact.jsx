import SmallHeader from '../ui/SmallHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import useScrollToTop from '../../utils/hooks/useScrollToTop';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  useScrollToTop();

  const { userData, accessToken, uri } = useContext(AuthContext); 
  const { setShowPopUp } = useContext(ProductContext);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');
  const navigate = useNavigate();
  const headers = ['Home', 'Contact']

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!userData?._id || !accessToken){
      console.log(userData);
      navigate('/login');
      return;
    }

    if(!name || !email || !message) {
      setShowPopUp('Name, Email, and Message are required!');
      return;
    }

    try {
      const response = await fetch(`${uri}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          user_id: userData?._id,
          name,
          email,
          phone,
          message
        }),
        credentials: 'include'
      })

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.error || errData.statusText;
        throw new Error(errMsg)
      }
      
      const data = await response.json();
      console.log(data);
      setShowPopUp(data.message);
    } catch (error) {
      setShowPopUp(error.message);
    }
  }

  return (
    <main className="contact pt-48 pb-20 sm:py-20 lg:py-16" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex-col gap-20">
        <SmallHeader headers={headers}/>

        <section className='contact-container flex flex-wrap'>
          <div className="left-section flex flex-col gap-20 py-10 px-8 cursor-pointer sm:basis-96">
            <div className='flex flex-col gap-4 relative after:absolute after:-bottom-10 after:h-0.5 after:left-0 after:w-full after:bg-secondaryGray'>
              <h1 className='font-semibold text-lg flex items-center gap-4'><FontAwesomeIcon icon={faPhone} className='bg-primaryRed text-white p-3 rounded-full'/> <span>Call To Us</span></h1>
              <p>We are available 24/7, 7 days a week.</p>
              <a href="tel:+8801611112222" className='h-text-red'>Phone: +8801611112222</a>
            </div>

            <div className='flex flex-col gap-4'>
              <h1 className='font-semibold text-lg flex items-center gap-4'><FontAwesomeIcon icon={faEnvelope} className='bg-primaryRed text-white p-3 rounded-full'/> <span>Write To Us</span></h1>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className='h-text-red'>Emails: customer@exclusive.com</p>
              <p className='h-text-red'>Emails: support@exclusive.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="right-section flex flex-col gap-8 flex-grow items-start px-8 py-10 shrink w-64">
            <div className='flex gap-4 flex-wrap w-full'>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='outline-none h-10 flex-grow p-2 rounded-sm bg-secondaryLight' 
                placeholder='Your Name'
              />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='outline-none h-10 flex-grow p-2 rounded-sm bg-secondaryLight' 
                placeholder='Your Email'
              />
              <input 
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='outline-none h-10 flex-grow p-2 rounded-sm bg-secondaryLight' 
                placeholder='Your Phone'
              />
            </div>

            <textarea 
              name="message" 
              id="message" 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='flex-grow w-full rounded-md bg-secondaryLight outline-none h-52 p-3' 
              placeholder='Your Message'
            ></textarea>
            <button className="bg-primaryRed text-white py-4 px-12 font-medium h-bg-red self-end rounded-md">Send Message</button>
          </form>    
        </section>
      </div>
    </main>
  )
}