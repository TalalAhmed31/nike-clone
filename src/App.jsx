import React from "react";
import Hero from "./section/Hero";
import PopularProducts from "./section/PopularProducts";
import SuperQuality from "./section/SuperQuality";
import Services from "./section/Services";
import SpecialOffer from "./section/SpecialOffer";
import CustomerReviews from "./section/CustomerReviews";
import Subscribe from "./section/Subscribe";
import Footer from "./section/Footer";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero />
    </section>
    
    <section className="padding">
    <PopularProducts />
    </section>
    
    <section className="padding">
    <SuperQuality />
    </section>
    
    <section className="padding-x py-10">
    <Services />
    </section>

    <section className="padding">
    <SpecialOffer />
    </section>
    
    <section className="padding bg-pale-blue">
    <CustomerReviews />
    </section>
    
    <section className="padding-x sm:py-32 py-16">
    <Subscribe />
    </section>
    
    <section className="bg-black padding-x padding-t pb-8">
    <Footer />
    </section>
  
  </main>
);

export default App;
