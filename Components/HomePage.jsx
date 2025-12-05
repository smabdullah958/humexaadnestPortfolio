"use client"
const HomePage=()=>{
  return (
    <div  id="home">
      <div   className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-0 pb-5 md:pb-0 bg-[#000912]">
      <div
        className="absolute inset-0 bg-contain bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('/M1.png')`
        }}
      />
      <div className="absolute inset-0 bg-[#002D62]/40 "></div>
      
      <div className="relative z-10 container px-10 text-left text-white">
        <div className="max-w-4xl sm:mt-10">
          <h1 className="text-xl sm:text-3xl 2xl:text-4xl font-bold md:pl-10 my-3 mt-5  ">Digital 
            <span className="text-purple-500"> Marketing </span> Agency</h1>
          <p  className="text-sm lg:text-lg 2xl:text-xl mb-10 text-gray-200  md:ml-10 leading-relaxed  text-left md:w-[40vw]  2xl:w-[20vw]">
            Need more leads? Better conversions? Higher revenue? That's exactly what our digital marketing services are about . At Humexaadnest, we create digital experiences that truly drive impact. From social media marketing to complete web design and development - we help businesses grow faster, smarter, and stronger online.
            </p>
    </div>
    </div>
    </div>
    </div> 
)};

export default HomePage