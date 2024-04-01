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
import ReactGA from "react-ga4";
import Countdown from "./components/Countdown/Countdown";

const TRACKING_ID = "G-3YKH40LC3Z";
ReactGA.initialize(TRACKING_ID);

const AppLayout = ()=>{
 useEffect(()=>{
  ReactGA.send(window.location.pathname);
 },[]);
 

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



