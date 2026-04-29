// import React from 'react'

import Hero from "../components/Hero";
import CraftedCollection from "../sections/home/CraftedCollection";
import ModernInteriorDesign from "../sections/home/ModernInteriorDesign";
import RecentBlog from "../sections/home/RecentBlog";
import Testimonials from "../sections/home/Testimonials";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import ProductSection from "../sections/home/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CraftedCollection />
      <WhyChooseUs />
      <ModernInteriorDesign />
      <Testimonials />
      <RecentBlog />
      <ProductSection />
    </>
  )
}
