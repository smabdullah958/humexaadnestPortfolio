// app/CaseStudy/layout.jsx
import Header from "@/Components/Header";

export const metadata = {
  title: "Our Case Studies | Agency",
};

export default function CaseStudyLayout({ children }) {
  return (
    <div>
      <Header />    {/* this will show header on all CaseStudy pages */}
      {children}
    </div>
  );
}
