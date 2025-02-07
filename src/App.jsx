// import { Container } from "postcss";
// import "./App.css";
// import { Header } from "./components/Header";

import { Service } from "./components/Service";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Process } from "./components/process";

function App() {
  return (
    <>
      <Hero />
      <Service/>
      <About/>
      <Process/>
    </>
  );  
  
}

export default App;
