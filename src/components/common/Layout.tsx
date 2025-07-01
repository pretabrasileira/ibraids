import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">{children}</main>
    <Footer />
  </div>
);

export default Layout; 