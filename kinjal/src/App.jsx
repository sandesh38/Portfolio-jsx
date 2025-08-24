import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />       
      <Projects />
    </div>
  );
}
export default App;