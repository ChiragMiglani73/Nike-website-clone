import React from "react";
import "./index.css";
import "./App.css";
import Nav from './components/Nav';
import Hero from './sections/Hero';
import PopularProducts from './sections/PopularProducts';
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding-x py-10'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding-x py-10'>
        <SpecialOffer/>
      </section>
      <section className='bg-blue-50 padding-x py-10'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  );
};
export default App;