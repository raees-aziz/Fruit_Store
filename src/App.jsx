import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menus/Menu";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Banner3 from "./Components/Banner/Banner3";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menu />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
}

export default App;
