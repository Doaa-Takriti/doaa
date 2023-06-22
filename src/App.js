import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';

import HeaderNews from "./pages/HeaderNews";
import HeaderCategory from "./pages/HeaderCategory"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Detailarticle from "./pages/Detailarticle"
import ScrollTop from "./components/ScrollTop"
import { Context } from './Context';




function App() {
  const { language } = useContext(Context);

  return (
  <div className={language === "en" ? 'app' : 'app rtl'}>
<HeaderNews />
<HeaderCategory />
<ScrollTop />
<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detailarticle' element={<Detailarticle />} />

         
          </Routes>

          <Footer/>

  </div>
  );
}

export default App;
