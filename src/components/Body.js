import React, { useState} from "react";
import axios from "axios"
import inbox from "../../assets/inboxu.png"
import telegram from "../../assets/telegram.png"
import twitter from "../../assets/twitter.png"
import medium from "../../assets/medium.png"
import "../fonts/fonts.css"
import triplegem from "../../assets/triplegem.png"
import oddiyana from "../../assets/oddiyana.png"
import fundland from "../../assets/fundland.png"
import x21 from "../../assets/x21.png"
import moonrock from "../../assets/moonrock.png"
import marshland from "../../assets/marshland.png"
import nabais from "../../assets/nabais.png"
import nxgen from "../../assets/nxgen.png"
import Countdown from "./Countdown/Countdown";
import coingecko from "../../assets/coingecko.png"
import coinmarketcap from "../../assets/coinmarketcap.png"
import alex from "../../assets/alex.png"
import seedify from "../../assets/seedify.png"
import finceptor from "../../assets/finceptor.png"
import orangedx from "../../assets/orangedx.png"
import timer from "../../assets/timer.png"
import Countdown from "./Countdown/Countdown";
import poolz from "../../assets/poolz.png"
import mexc from "../../assets/mexc.png"
import unisat from "../../assets/unisat.png"
import gateio from "../../assets/gateio.png"
import buy from "../../assets/buy.png"
import pancake from "../../assets/pancake.png"
import bingx from "../../assets/bingx.png"

const Body =()=>{
    const submitHandler = (event)=>{
        event.preventDefault();
         const email_address= event.target.email.value;
         axios.post("https://api.trex20.xyz/api/v1/subscribe",{
            email_address
         })
         .then((response)=>{
            console.log(response);
            event.target.reset();
         })
         .catch((error) =>{
            console.log(error);
         });
    };


    return(<>
    
    <section id="landing">
        <div className="home" >
            <div className="buy-container">
                <div className="buy-on">Buy On:</div>
                <div className="buy-platform">
               <a href="https://www.gate.io/trade/TX20_USDT" target="_blank"> <img src={gateio} className="gateio" /></a>
               <a href="https://www.mexc.com/exchange/TX20_USDT?_from=search_spot_trade"target="_blank"><img src={mexc} className="mexc" /></a>
               <a href="https://unisat.io/market/brc20?tick=TX20" target="_blank"> <img src={unisat} className="unisat" /></a>
               <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x29838b8C8b7CD6F0698c2fd6feAf0363d2CB6dA1" target="_blank"> <img src={pancake} className="pancake" /></a>
               <a href="https://bingx.com/en-us/spot/TX20USDT/?ch=DEBUT" target="_blank"> <img src={bingx} className="bingx" /></a>
                </div>
            </div>
            <div className="timer-container">
            {/* <img src={timer} className="timer" /> */}
            {/* <div className="countdown-body"> */}
            <Countdown/></div>
        {/* </div> */}
            </div>
            
    </section>  
   
    <section  id="trex">  
        <div className="trex-body">
            
        </div>
    </section>
    <section id="inscription">
        <div className="inscription-body-1">
        
        </div>
        <div className="inscription-body-2">
        
        </div>
    </section>
    <section id="lotto">
        <div className="lotto-body">
        
        </div>
    </section>
    <section id="roadmap">
        <div className="roadmap-body">
            
        </div>
    </section>
    <section id="backers">
        <div className="backers-body" style={{ fontFamily: 'Heaven'}} >
           <p style={{ textAlign:"center",color:"#FF7A00"}} className="text-with-gradient">backers</p>
           <div className="backers-logo" >
              <div  className="backers-container">
              <a href="https://www.triplegem.capital/" target="_blank"><img className="triplegem" src={triplegem} /></a>
              <a href="https://oddiyana.ventures/" target="_blank"><img className="oddiyana" src={oddiyana} /></a>
              <a href="https://www.marshlandcapital.com/" target="_blank"><img className="marshland" src={marshland} /></a>
              <a href="https://x21digital.com/" target="_blank"><img className="x21" src={x21} /></a>
             </div>
              <div  className="backers-container">
              <a href="https://fundland.capital/" target="_blank"><img className="fundland" src={fundland}  /></a>
              <a href="https://www.nxgen.xyz/" target="_blank"><img className="nxgen" src={nxgen}    /></a>
              <a href="https://www.moonrockcapital.io/" target="_blank"><img className="moonrock" src={moonrock} /></a>
              <a href="https://nabais.capital/" target="_blank"><img className="nabais" src={nabais}   /></a> 
              
              
              
             </div>
           </div>
        </div>
    </section>
    <section id="backers">
        <div className="backers-body" style={{ fontFamily: 'Heaven'}} >
           <p style={{ textAlign:"center",color:"#FF7A00"}} className="text-with-gradient">Launchpad partners</p>
           <div className="backers-logo" >
             
              <div  className="backers-container">
             <a href="https://seedify.fund/" target="_blank"><img className="fundland" src={seedify}  /></a> 
             <a href="https://alexlab.co/" target="_blank"><img className="fundland" src={alex}    /></a> 
             <a href="https://finceptor.app/" target="_blank"><img className="marshland" src={finceptor}   /></a> 
               {/* <img className="marshland" src={finceptor}   />
              <img className="fundland" src={poolz}/> */}
             </div>
              <div  className="backers-container">
             <a href="https://orangedx.com/" target="_blank"><img className="orangedx" src={orangedx} /></a> 
               
             <a href="https://www.poolz.finance/" target="_blank"> <img className="fundland" src={poolz}/></a>
             </div>
           </div>
        </div>
    </section>
    <section id="contact">
        <div style={{ fontFamily: 'Heaven' }} className="contact" >CONTACT</div>
        <div className="contact-body">
            
            <div className="contact-left">
            <img  className="inbox" alt="Inbox_image" src={inbox} />
            </div>
            <div className="contact-right">
            
            <div style={{ fontFamily: 'Heaven' }} className="subscribe">SUBSCRIBE :</div>
            <form className="collect" onSubmit={submitHandler} >
           
            <input style={{fontFamily:'Pixelify Sans'}} placeholder="Enter your email" type="email" id="email"  name="email" /> <t/>
            <input style={{fontFamily:'Heaven', cursor:"pointer"}}  type="submit" value="Submit"  />
            </form>
            <a href="https://twitter.com/trex20_official " target="_blank">
            <img  className="twitter" alt="x" src={twitter} /></a>
            <a href="https://t.me/trex20OfficialChat" target="_blank">
            <img  className="telegram" alt="telegram" src={telegram} /></a>
            <a href="https://medium.com/@trex20" target="_blank">
            <img  className="medium " alt="medium" src={medium} /></a>
            <a href="https://www.coingecko.com/en/coins/trex20" target="_blank">
            <img  className="coingecko " alt="coingecko" src={coingecko} /></a>
            <a href="https://coinmarketcap.com/" target="_blank">
            <img  className="coinmarketcap " alt="coinmarketcap" src={coinmarketcap} /></a>
            <div className="inscription-data">
                <span>CA BRC20 inscription ID:</span>  <span className="inscription-id">c1d02a5fd937c26dcfc1b5b5bcd7601a6ecc466c894274f144b3dd0c466</span>
                <span style={{marginTop:"10px"}}>CA BEP20:</span><span className="inscription-id">0x29838b8C8b7CD6F0698c2fd6feAf0363d2CB6dA1</span> 
            </div>
            </div>
        </div>
    </section>
     
        </>
    );
}
export default Body;







// const Body =()=>{
//     const data = {email_address:""};
//     const [inputData,setInputData]= useState(data)
    
//     const handleData = (e)=>{
//         setInputData({...inputData,[e.target.name]:e.target.value})
//     }
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         axios.post("https://api.trex20.xyz/api/v1/subscribe",inputData)
//         .then((response)=>{
//             console.log(response)
//             e.target.reset();
//         })
//         .catch((error) =>{
//             console.log(error)
//         })
//     }
//     return(<>
//     <section id="landing">
//         <div className="home" >
           
//         </div>
//     </section>  
//     <section  id="trex">  
//         <div className="trex-body">
            
//         </div>
//     </section>
//     <section id="inscription">
//         <div className="inscription-body-1">
        
//         </div>
//         <div className="inscription-body-2">
        
//         </div>
//     </section>
//     <section id="lotto">
//         <div className="lotto-body">
        
//         </div>
//     </section>
//     <section id="roadmap">
//         <div className="roadmap-body">
            
//         </div>
//     </section>
//     <section id="contact">
//         <div style={{ fontFamily: 'Heaven' }} className="contact" >CONTACT</div>
//         <div className="contact-body">
            
//             <div className="contact-left">
//             <img  className="inbox" alt="Inbox_image" src={inbox} />
//             </div>
//             <div className="contact-right">
            
//             <div style={{ fontFamily: 'Heaven' }} className="subscribe">SUBSCRIBE :</div>
//             <form className="collect" onSubmit={handleSubmit}>
           
//             <input style={{fontFamily:'Pixelify Sans'}} placeholder="Enter your email" type="email" id="email_address"  name="email_address" value={inputData.email_address} onChange={handleData} onClick={handleSubmit} /> <t/>
//             <input style={{fontFamily:'Heaven', cursor:"pointer"}}  type="submit" value="Submit"  />
//             </form>
//             <a href="https://twitter.com/trex20_official " target="_blank">
//             <img  className="twitter" alt="twitter_image" src={twitter} /></a>
//             <a href="   https://t.me/trex20OfficialChat" target="_blank">
//             <img  className="telegram" alt="telegram_image" src={telegram} /></a>
//             </div>
//         </div>
//     </section>
    
//         </>
//     );
// }
// export default Body;