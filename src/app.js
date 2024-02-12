import React,{useEffect} from "react"
import  ReactDOM  from "react-dom/client"
import Navbar from "./components/Navbar"

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Roadmap from "./components/Roadmap";
import Neo from "./components/Neo";
import Contact from "./components/Contact";
import Navb from "./components/Navb";

const AppLayout = ()=>{
 
 

    return(
 
        <>
        <Router>
        <Navbar/>
        
        <Routes>
              <Route path="/" element={<Body/>}/>
              
            </Routes>
          </Router>
        </>
        
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)



