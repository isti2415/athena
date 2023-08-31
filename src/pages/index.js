import React from "react";
import Nav from "../components/nav.js";
import Hero from "@/components/hero.js";
import Footer from "@/components/footer.js";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-gradient-to-t dark:to-gray-800 dark:from-primary bg-gradient-to-t from-primary to-neutral">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
