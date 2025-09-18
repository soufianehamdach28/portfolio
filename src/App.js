import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Certificate from "./components/Certificate";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <Helmet>
        <title>SOUFIANE HAMDACH</title>
       </Helmet>
      <p className="justify-center">Portfolio - Soufiane Hamdach</p>
      {/*<Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />  */}
    </div>
  );
}



export default App;
