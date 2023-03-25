import React, { useEffect, useState } from 'react'
import { useScore, useStore } from '../App_State'
import { useNavigate } from 'react-router'

function Finish() {
  let nav = useNavigate()

  //This is for the clip path animation effect onload
  const [clipPathEffect,setClipPathEffect] = useState('circle(10% at 50% 90%)')

  //These are global variable which controls the visibility of the navbar
  const setPage = useStore((state:any) => state.setPage)
  const score = useScore((state:any) => state.score)

  //Here we are setting what page this is
  useEffect(() => {
    setPage('FINISH')
  })

  //This makes the clipPath effect onload
  useEffect(()=>{
      setClipPathEffect('circle(150% at 50% 90%)')
  },[])


  return (
    <div style={{ display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw',background:'#6f1e98',transition:'0.5s ease',flexDirection:'column',clipPath:clipPathEffect,}}>
      <h1 style={{fontSize:'2em'}}>
        You scored {score} out of 5
      </h1>
      <h2 style={{marginTop:'5vh'}}> Congratulations</h2>

      <button style={{height:'6vh', width:'30vw', background:'white', color:'black', borderRadius:'30px', display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20vh', outline:0}} onClick={() => nav('/')}>Back</button>
    </div>
  )
}

export default Finish