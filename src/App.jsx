import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import KaranganPage from './pages/KaranganPage';
import FaqPage from './pages/FaqPage';
import TestimonialPage from './pages/TestimonialPage';
import NavbarComponent from './components/NavbarComponent';
// import FooterComponent from './components/FooterComponent';


function App() {
  return ( 
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path="/karangan" Component={KaranganPage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/testimonial" Component={TestimonialPage}/>
      </Routes>
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App
