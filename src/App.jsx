import { isMobile } from 'react-device-detect';
import { BrowserRouter } from "react-router-dom";

import { About, CGIprojects, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        {!isMobile && <Tech />}
        {!isMobile && <CGIprojects />}
        
        <div className='relative z-0'>
          <Contact />
          {!isMobile && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
