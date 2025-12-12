// app/Services/layout.jsx
import Header from "@/Components/Header";

export const metadata = {
  title: "Our Services | Agency",
};

export default function ServicesLayout({ children }) {
  return (
    <div>
      <Header />    {/* this will show header on all Services pages */}
      {children}
    </div>
  );
}
