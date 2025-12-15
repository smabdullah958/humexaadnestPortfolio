import React from "react";
import { caseStudies } from "@/Components/Services&CaseStudyObject";
import Image from "next/image";
const Page = ({ params }) => {
  const { slug } =React.use(params);

  // Find case study by slug
  const caseStudy = caseStudies.find((s) => s.slug === slug);

  if (!caseStudy) {
    return (
      <div className="p-10 text-red-600 text-center">
        Case Study Not Found
      </div>
    );
  }

  return (
    <div className="max-w-screen py-8">
       <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-100 via-white to-purple-100 py-10 sm:py-16">
  {/* Decorative blurred shapes */}
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute top-20 -right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

  {/* Title */}
  <h1 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mt-10  2xl:mt-40">
    {caseStudy.title}
  </h1>

</div>


     <div className="flex flex-col justify-center  sm:flex-row mt-20 px-5 md:px-6 gap-x-10">
        <Image src={caseStudy.image} 
        alt={caseStudy.title} 
        width={800} height={200} 
        loading="lazy" className="rounded-2xl shadow-xl 2xl:mt-20  " 
        />
<div className="grid grid-cols-1 gap-6 mt-10">
  {(() => {
    const lines = caseStudy.OverAllResult
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    const results = [];
    for (let i = 0; i < lines.length; i += 2) {
      results.push({
        value: lines[i],
        label: lines[i + 1],
      });
    }

    return results.map((item, index) => (
      <div
        key={index}
        className="border rounded-2xl p-5 sm:p-10 text-center bg-white shadow-sm"
      >
        <p className="text-2xl font-extrabold text-blue-500 mb-2">
          {item.value}
        </p>
        <p className="text-lg text-gray-700 font-medium">
          {item.label}
        </p>
      </div>
    ));
  })()}
</div>
     </div>

{/* DETAILS SECTION */}
<div className="max-w-6xl mx-auto px-5 md:px-8 mt-28 space-y-24">

  {/* Background */}
  <section className="bg-gray-50 rounded-3xl p-8 md:p-14 shadow-sm">
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
      📌 Background
    </h2>
    <p
      className="text-gray-700 text-lg leading-relaxed" 
    dangerouslySetInnerHTML={{ __html: caseStudy.background}}/>
  </section>

  {/* Services */}
  <section className="bg-white rounded-3xl p-8 md:p-14 border shadow-sm">
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
      🛠 Services Provided
    </h2>
    <p 
    dangerouslySetInnerHTML={{ __html: caseStudy.service }}
    className="text-gray-700 text-lg"/>
      </section>

  {/* Challenges & Solutions */}
  <section className="grid md:grid-cols-2 gap-8">

    {/* Challenges */}
    <div className="bg-red-50 rounded-3xl p-8 md:p-12 shadow-sm">
      <h3 className="text-xl md:text-2xl font-extrabold text-red-600 mb-3">
        ⚠ Challenges
      </h3>
      <p 
      dangerouslySetInnerHTML={{ __html: caseStudy.challenges }}
      className="text-gray-700 text-lg leading-relaxed h-40 overflow-y-auto text-justify"/>
      </div>

    {/* Solutions */}
    <div className="bg-green-50 rounded-3xl p-8 md:p-12 shadow-sm ">
      <h3 className="text-xl md:text-2xl font-extrabold text-green-600 mb-3 ">
        ✅ Our Solutions
      </h3>
      <p 
      dangerouslySetInnerHTML={{ __html: caseStudy.solutions }}
      className="text-gray-700 text-lg leading-relaxed h-40 overflow-y-auto text-justify"/>
      </div>

  </section>

  {/* Final Result */}
  <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-16 text-white overflow-hidden">

    {/* Glow */}
    <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

    <h2 className="relative text-2xl md:text-3xl font-extrabold mb-4">
      🚀 Final Results
    </h2>

    <p 
    dangerouslySetInnerHTML={{ __html: caseStudy.result }}
    className="relative text-lg md:text-xl leading-relaxed"/>
  </section>

</div>
         </div>
  );
};

export default Page;    
