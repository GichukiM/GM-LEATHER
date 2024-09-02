import NavBar from './components/common/NavBar';
import Hero from './components/common/Hero';
import NewProducts from './components/ui/newproducts';
import Testimonials from './components/ui/testimonials';
import Footer from './components/common/footer';
import Services from './components/ui/services';
import ShoeCollection from './components/ui/shoeCollection'
import Accessories from './components/ui/blog';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <NewProducts />
      <ShoeCollection />
      <Testimonials />
      <Accessories />
      <Services />
      <Footer />
    </>
  );
}
