import React from 'react'
import Header from '@/Components/Header'
import HomePage from '@/Components/HomePage'
import About from '@/Components/About'
import OurExperience from '@/Components/OurExperience'
import Services from '@/Components/Services'
import TrustSignals from '@/Components/TrustSignals'
import WhyChooseUs from '@/Components/WhyChooseUs'
import Pricing from '@/Components/Pricing'
import ContactUs from '@/Components/Contact'
import Footer from "@/Components/Footer"
const page = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <WhyChooseUs />
      <TrustSignals />
      <About/>
      <OurExperience />
      <Services />  
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default page
