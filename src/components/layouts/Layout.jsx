import { Outlet } from 'react-router-dom';
import TopHeader from '../common/TopHeader';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Providers from './Providers';
import Notifications from '../common/Notifications';

export default function Layout() {
  
  return (
    <>
      <TopHeader />
      <Providers>
        <Header/>
        <Outlet />
        <Notifications />
      </Providers>
      <Footer/>
    </>
  )
}