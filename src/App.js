import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import 'react-notifications/lib/notifications.css';
import btnModule from './btn.module.css'
import { question } from './data/faqs';
import Faqs from './faqs component'


function App() {
  // let[status,setStatus]=useState(false);

  // let[pstatus,setPstatus]=useState(false);

  // let[modalstatus,setModalstatus]=useState(false)

  // let[menustatus,setMenustatus]=useState(false)

  // let[hi,hiHello]=useState(false)

  // let[showAns,setShowAns]=useState((null))




  return (
    <div className="App">

    {/* <Faqs/> */}
    {/* <div>
        <h1>Frequently Asked Question (FAQs)</h1>
        <div className='faqouter'>

          {question.map((faqItems,i)=>{
            return(
              <div key={faqItems.id}className='faqItems'>
              <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
              <p className={showAns===faqItems.id ? 'activeAns': ''}>{faqItems.Ans}</p>
            </div>
        )
        }
        )
        }

        </div>
      </div> */}




{/* 

<div>    
<button className='btn-hi' onClick={()=>hiHello(!hi)}>{(hi) ? 'Tap': 'Back'}</button>
<p className='para-hi'>{(hi)? 'HI': "Hello"}</p>
</div>  
        <button className='micon' onClick={()=>setMenustatus(!menustatus)}>
          {menustatus
          ?
          <span>&times;</span>
          :
          <span> &#9776;</span>
          }
          </button>
     <div className={`Menu ${menustatus ? 'activeMenu':''}`}>
<ul>
  
  <li>Home</li>
  <li>About</li>
  <li>Course</li>
  <li>Gallery</li>
  <li>Contact</li>
</ul>

</div>


<button className='en'onClick={()=>setModalstatus(true)}>Enquire Now</button>

<div onClick={()=>setModalstatus(false)} className={`modalOverlay ${modalstatus ? 'modalShow':''}` }></div>
 <div className={`modalDiv ${modalstatus ? "showModalDiv" : ""}`}>
  <h3>Enquiry Now <span onClick={()=>setModalstatus(false)} className='span'>&times;</span></h3>
 </div>


<input type={pstatus ? 'text': 'password'}/>
<button onClick={()=>setPstatus(!pstatus)}>{(pstatus)? 'Hide': 'Show'}</button>
<br/>

     <button className={btnModule.error}>Error</button>
     <button className={btnModule.warning}>warning</button> 


     <button onClick={()=>setStatus(!status)}>{(status) ? 'hide': 'show' }</button>
     {
      (status)
      ?
      <p className='para'>Welcome To Karachi</p>
      :
      ''
     } */}
    </div>
    );} 

export default App;
