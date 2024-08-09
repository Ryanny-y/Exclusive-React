import { Outlet } from 'react-router-dom';
import TopHeader from '../common/TopHeader';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProductProvider from '../../context/ProductContext';

export default function Layout() {
  return (
    <>
      <TopHeader />
      <ProductProvider>
        <Header/>
        <Outlet />
      </ProductProvider>
      <Footer/>
    </>
  )
}