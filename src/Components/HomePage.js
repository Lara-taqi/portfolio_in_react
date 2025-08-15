import React, { useState } from "react";
import { Link , Outlet} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./Services";
import AutoLayoutExample from "./Skills"
import Education from "./Education&Experince";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact Us ";
import  Button  from "react-bootstrap/Button";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Footer from "./Footer";

function Nav(){
    const [open,setOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    return(
<>
<div className={isDarkMode ? "dark-mode" : ""}>
<header className="head-sec" id="main">
<nav className="Nav-bar">
    <div className="menu-btn" onClick={()=>setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul className={`list-item ${open ? "active" : ""}`}>
        <li>
        <a href='/' className="link"> Home</a>
        </li>
        <li>
        <a href='#Services' className="link">Services </a>
        </li>
        <li>
        <a href='#Skills'className="link"> Skills</a>
        </li>
        <li>
        <a href='#Education'className="link">Education </a>   
        </li>
        <li>
        <a href='#Education'className="link"> Experince </a>
        </li>
        <li>
        <a href='#Projects'className="link">Projects </a>   
        </li>
        <li>
        <a href='#Testimonials'className="link">Testimonials</a>   
        </li>
        <li>
         <a href='#Contact'className="link"> Contact Us</a>   
        </li> 
               <div className={isDarkMode ? "dark-mode" : ""}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <MdOutlineLightMode />:<MdOutlineDarkMode /> }
        
      </button></div>
    </ul>

</nav>
<div className="video-display">
    <video
    src={`${process.env.PUBLIC_URL}/cyber.mp4`}
    title="cybersecurity operation"
    autoPlay
    loop
    muted
    />
    <div className="content">
        <h6>HELLO THERE WELLCOME TO MY PORTFOLIO</h6>
        <h1>I'm Lara Taqi </h1>
       <h1 style={{color:'green'}}> A CyberSecurity
             & Full Stack Developer</h1>
        <div className="cv">
        <Button variant="outline-secondary " ><a href="https://www.linkedin.com/in/lara-taqi-8ba083344/">Linked In </a></Button>
        <Button variant="outline-secondary " ><a href="https://drive.google.com/file/d/1VVfBRH70ObJsvZRzNw78LSqy1vC0TFkz/view?usp=drive_link">CV</a></Button>
    </div>
</div>
</div>
</header>
<Services/>
<AutoLayoutExample/>
<Education/>
<Projects/>
<Testimonials/>
<Contact/>
<Footer/>
<Outlet/>

</div>

</>
    );
}
export default Nav;
