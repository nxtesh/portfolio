import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const colors = ["#131313", "#181818"];
function App() {

  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    
    <div   style={{ backgroundColor: color }}>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black scroll-smooth">
        <div className="fixed top-0 -z-10 h-full w-full bg-[#181818]">
          {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        </div>
        <div className="container mx-auto px-8">
        
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
          
        </div>
      </div>
      
    
    </div>
    
  );
}

export default App;
