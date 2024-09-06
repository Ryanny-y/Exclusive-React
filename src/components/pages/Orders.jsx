import { useContext, useEffect, useState } from 'react';
import SmallHeader from '../ui/SmallHeader';
import ProductOrder from '../ui/ProductOrder';
import { AuthContext } from '../../context/AuthContext';
import useRedirect from '../../utils/hooks/useRedirect';
import useScrollToTop from '../../utils/hooks/useScrollToTop';

export default function Orders() {

  useRedirect();
  useScrollToTop();
  const [ orderData, setOrderData ] = useState([]);
  const { userData, isAuthenticated, accessToken } = useContext(AuthContext);

  useEffect(() => {
    if(isAuthenticated) {
      const fetchOrders = async () => {
        console.log(userData?.id);
        try {
          const response = await fetch(`https://exclusive-api.onrender.com/orders/${userData?.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            credentials: 'include'
          });;
          
          if(!response.ok) {
            const errData = await response.json();
            const errMsg = errData.message || errData.statusText();
            throw new Error(errMsg);    
          }
          const data = await response.json();
          setOrderData(data);
        } catch (error) {
          console.error(error.message);
        }

      }

      fetchOrders();
    }
  }, [userData, isAuthenticated, accessToken])
  
  return (
    <main className="contact py-20 lg:py-16" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto flex flex-col gap-20">
        <SmallHeader headers={['Home', 'Orders']}></SmallHeader>

        <section id="orders-container" className='flex flex-col gap-10 w-full'>
          {orderData.orders && 
            orderData.orders.map(order => <ProductOrder key={order._id} orderDetails={order}/>)}
        </section>
      </div>
    </main>
  )
}