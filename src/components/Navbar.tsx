import React from 'react'
import { useScore } from '../App_State'
import Back from '../assets/Back.svg'
import Search from '../assets/Search.svg'
import './Parent.css'
import { useNavigate } from 'react-router'

function Navbar() {
  let nav = useNavigate()
    

  return (
    <div className='NavBar_Sub'>
      <div style={{height:'35px', width:'35px', borderRadius:'35px',background:'rgba(255,255,255,0.3)', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={Back} height={15} onClick={() => nav('/')}/>
      </div>
      
      <div className="Icons">
        <img src={Search} height={20} />
        <div></div>
      </div>
      </div>
  )
}

export default Navbar