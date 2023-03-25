import React, { useEffect, useState } from 'react'
import './Parent.css'
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useStore } from '../App_State';

function Home() {

  //These are global variable which controls the visibility of the navbar
  const setPage = useStore((state:any) => state.setPage)

  const nav = useNavigate()

  //These are for the animation effect onload
  const [effects, setEffects] = useState({
    height:'0vh',
    width:'0vh',
    height1:'0vh',
    width1:'0vh',
  })

  //This is for the clipPath button effect onClick
  const [buttonEffect,setbuttonEffect] = useState('circle(100%)')

  //This effects changes the value onLoad to give us teh effect
  useEffect(()=>{
    setEffects({
      height:'60vh',
      width:'60vh',
      height1:'40vh',
      width1:'40vh',
    })
  },[])

  //This sets the page for the navbar
  useEffect(() => {
    setPage("HOME")
  },[])
  
  return (
    <>
    <div className="Home">
      <div className="Home_Sub">
        <div className="Heading">
            <h1>Welcome,<br></br>
            <span>Shibansh</span></h1>

            <p>Lets take the first test of the day!!</p>
        </div>
        <div className="Quiz_Test">
            <h1>Todays quiz is about NBA!!!</h1>
            <button onClick={() => {setTimeout(() => nav('/Details'),1000); setbuttonEffect('circle(0%)')}} style={{clipPath:buttonEffect, transition:'0.5s ease'}}>Quiz Details</button>
        </div>
      </div>
      
      <div style={{height:effects.height, width:effects.width, background:'rgba(255, 192, 203, 0.5)', borderRadius:'50%', position:'absolute',zIndex:0, left:'-20vw', bottom:'-20vh', transition:'.3s ease'}}></div>
      <div style={{height:effects.height1, width:effects.width1, background:'rgba(0, 255, 255, 0.5)', borderRadius:'50%', position:'absolute',zIndex:0, right:'-20vw', bottom:'-20vh', transition:'.3s ease'}}></div>
    </div>

    </>
  )
}

export default Home