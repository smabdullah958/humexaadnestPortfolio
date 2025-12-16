import React from 'react'
import Header from '@/Components/Header'
import HomePage from '@/Components/HomePage'
import About from '@/Components/About'
import OurExperience from '@/Components/OurExperience'
import Services from '@/Components/Services'
import TrustSignals from '@/Components/TrustSignals'
import WhyChooseUs from '@/Components/WhyChooseUs'
import Pricing from '@/Components/Pricing'
import OurValueableClient from '@/Components/OurValueableClient'
import ContactUs from '@/Components/Contact'
import Footer from "@/Components/footer.jsx"
import CaseStudy from '@/Components/CaseStudy'
//for animation
import "aos/dist/aos.css";


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
      <CaseStudy />
      <Pricing />
      <OurValueableClient />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default page
