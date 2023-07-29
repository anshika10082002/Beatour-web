import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
//import Slider from "./Components/Slider"
import Home from "./Components/Home"
import Services  from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
// import LogIn from './Components/LogIn'
// import SignUp from './Components/SignUp'
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import Waxing from './ServiceItems/Waxing';
import Threading from './ServiceItems/Threading';
import BleachDetan from './ServiceItems/BleachDetan';
import ManiPadi from './ServiceItems/ManiPadi';
import PreBridal from './ServiceItems/PreBridal';
import HairCare from './ServiceItems/HairCare';
import Makeup from './ServiceItems/Makeup';
import BridalMakeup from './ServiceItems/BridalMakeup';
import Nails from './ServiceItems/Nails';
import BodyMassage from './ServiceItems/BodyMassage';
import FacialCleanup from './ServiceItems/FacialCleanup';
import Packages from './ServiceItems/Packages';

function App() {
  return (
    <>
  
    <Navbar/>
    {/* <Slider/> */}

    <Routes>
<Route  path="/"  element={<Home/>}/>
<Route  path="/services"  element={<Services/>}/>
<Route  path="/about"  element={<About/>}/>
<Route  path="/contact"  element={<Contact/>}/>
<Route  path="/feedback"  element={<Feedback/>}/>
{/*-------------------*add after if needed --------------------*/}
{/* <Route  path="/login"  element={<LogIn/>}/>
<Route  path="/signup"  element={<SignUp/>}/> */}
{/*-----------------------*add after if needed -----------*/}
{/* <Navigate to="/"/> */}
<Route  path="/waxing"  element={<Waxing/>}/>
<Route  path="/threading"  element={<Threading/>}/>
<Route  path="/bleach & de-tan"  element={<BleachDetan/>}/>
<Route  path="/mani-padi"  element={<ManiPadi/>}/>
<Route  path="/pre-bridal"  element={<PreBridal/>}/>
<Route  path="/hair-care"  element={<HairCare/>}/>
<Route  path="/makeup"  element={<Makeup/>}/>
<Route  path="/bridal-makeup"  element={<BridalMakeup/>}/>
<Route  path="/body-massage"  element={<BodyMassage/>}/>
<Route  path="/facial & clean-up"  element={<FacialCleanup/>}/>
<Route  path="/packages"  element={<Packages/>}/>
<Route  path="/nails"  element={<Nails/>}/>

    </Routes>
    
    <Footer/>
   
    </>
  );
}

export default App;
