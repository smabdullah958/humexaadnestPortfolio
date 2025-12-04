import "./globals.css";


export const metadata = {
  title: "humexaadnest Marketing Agency",
  description: "humexaadnest is a USA base Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
