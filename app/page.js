import React from 'react'
import Header from '@/Components/Header'
import HomePage from '@/Components/HomePage'
import About from '@/Components/About'
import OurExperience from '@/Components/OurExperience'
import Services from '@/Components/Services'
const page = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <About/>
      <OurExperience />
      <Services />
    </div>
  )
}

export default page
