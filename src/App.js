import Header from './components/Header';
import WhyCrappo from './components/WhyCrappo';
import Main from './components/Main';
import Features from './components/Features';
import Startmining from './components/Startmining';
import Footer from "./components/Footer" 
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true
    });
  },[])
  return (
    <div className="App">
      <Header />
      <WhyCrappo />
      <Main />
      <Features />
      <Startmining />
      <Footer />
    </div>
  );
}

export default App;
