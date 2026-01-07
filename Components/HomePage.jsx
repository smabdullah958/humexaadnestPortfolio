"use client"
import Link from 'next/link'
const HomePage=()=>{

  return (
    <div
    id="home">
      <div   className="relative min-h-[80vh] 2xl:min-h-[70vh] flex items-center justify-center overflow-hidden pt-10 md:pt-0 pb-5 md:pb-0 bg-[#ebf2f6] xl:mt-14">
      <div
        className="absolute inset-0  bg-contain bg-right bg-no-repeat h-[80vh] mt-24 sm:mr-10 rounded-2xl opacity-10 sm:opacity-40  lg:opacity-50 bg-[url('/LeadGeneration.png')]"/>
      <div className="relative z-10 container px-10 text-left text-gray-800 font-extrabold">
        <div className="max-w-xl sm:mt-10">
          <div className="text-xl sm:text-3xl 2xl:text-4xl font-bold md:pl-10  mt-5 mb-5 sm:mb-10 leading-tight">
            <span className='text-center block pt-20  '>HUMEXA ADNEST </span>
            <span className='block text-purple-700 text-[12px] font-semibold  text-center'> Lead Generation & Digital Growth Experts</span>
          </div>
        </div>
          <p className="text-sm lg:text-lg 2xl:text-xl mb-10 mt-16 text-gray-800 md:ml-10 leading-relaxed  text-left md:w-[40vw] 2xl:w-[20vw] font-semibold">
          helping Home Services, pos saas, law firms & property management companies generate high-quality leads with proven Meta Ads Strategies. Achieve Low Cost-Per-Lead 
          <span className='font-extrabold text-purple-700  '> ($10–$20) </span> and Maximize Revenue 
          <span className='font-extrabold text-purple-700  '> ($50k+ Monthly Potential) </span> with <span className='font-extrabold text-purple-700  '> 3+ Years </span> of Targeted US Campaign Experience.
            </p>
     
<Link
  href="https://wa.me/923206841237?text=Hi%20I%20want%20to%20book%20a%2015-minute%20call."
  target="_blank"
  className="md:hidden text-[10px] fixed bottom-5 right-5 px-5 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition z-50">
  Get Free Consultation
</Link>
    </div>
    </div> 
    </div> 
)};

export default HomePage
