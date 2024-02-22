import React, { useState} from "react";
import axios from "axios"
import inbox from "../../assets/inboxu.png"
import telegram from "../../assets/telegram.png"
import twitter from "../../assets/twitter.png"
import medium from "../../assets/medium.png"
import "../fonts/fonts.css"



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
            <img  className="twitter" alt="twitter_image" src={twitter} /></a>
            <a href="https://t.me/trex20OfficialChat" target="_blank">
            <img  className="telegram" alt="telegram_image" src={telegram} /></a>
            <a href="https://medium.com/@info_85446" target="_blank">
            <img  className="medium" alt="medium" src={medium} /></a>
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