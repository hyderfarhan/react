import React from 'react'
import { question } from './data/faqs';
import { useState } from 'react';


export default function Faqs() {     
    let [currentId,setcurrentId] =useState(question[0].id)
    let items=question.map((itemsData,i)=>{
        let itemsDetails={
            itemsData,
            currentId,
            setcurrentId
        }

        return(
       <FaqItems  itemsDetails={itemsDetails} key={i} />
        )
       
     } )
  return (
    <div>
      <h2>Frequently Asked Question (FAQs)</h2>
      <div className='faqouter'>
      {items}
        </div>
    </div>
  )
}
function FaqItems({itemsDetails}){
    
    let {itemsData,currentId,setcurrentId}=itemsDetails;

    return(
        <div className='faqItems'>
            <h2 onClick={()=>setcurrentId(itemsData.id)}>{itemsData.question}</h2>
           
            <p className={currentId===itemsData.id ? 'activeAns':''}>
                {itemsDetails.itemsData.Ans}</p>
            </div>
    )
}