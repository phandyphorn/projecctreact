import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
/**
 * Import Navbar component to be used with App.js to combine menu and
 * each result of each menu item.
 */
import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Servicee from './pages/service/Service';
import About from './pages/about/About';
import SignIn from './pages/signin/Signin';
import Signout from './pages/signout/Signout';

/**
 * App component collection by route
 * @returns 
 */
function App() {
  return (
    <div>
      <BrowserRouter>
      {/* Navbar: show menu or nav and show path */}
        <Navbar/>
        <Routes>
          {/* each path must to be the same with to='' in navbar component */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Servicee />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<Signout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;