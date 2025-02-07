// import { Container } from "postcss";
// import "./App.css";
// import { Header } from "./components/Header";

import { Service } from "./components/Service";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Process } from "./components/process";
import { Project } from "./components/Project/Project";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <>
      <Hero />
      <Service/>
      <About/>
      <Process />
      <Project />
      <Testimonial/>
    </>
  );  
  
}

export default App;
