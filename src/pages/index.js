import React from "react";
import Nav from "../components/nav.js";
import Hero from "@/components/hero.js";
import Footer from "@/components/footer.js";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-gradient-to-t dark:to-gray-900 dark:from-[#B0B4F3] bg-gradient-to-t from-[#B0B4F3] to-white">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
