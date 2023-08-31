import React from "react";
import Nav from "../components/nav.js";
import Hero from "@/components/hero.js";
import Footer from "@/components/footer.js";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
