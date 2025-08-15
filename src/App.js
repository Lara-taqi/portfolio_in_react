import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Home Page';
import style from './Components/Componentstyle.css';
import { BrowserRouter, createHashRouter } from 'react-router-dom';
import React, { useState } from "react";
import Footer from './Components/Footer';


function App() {
  const routes=createHashRouter()
  return (
    <>
    <BrowserRouter>
    <Nav/>

    </BrowserRouter>
  
  
  </>
  );
}

export default App;
