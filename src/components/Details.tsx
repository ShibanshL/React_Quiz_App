import React,{useState,useEffect} from 'react'
import viteLogo from '/vite.svg'
import Star from '../assets/Star.svg'
import Point from '../assets/Points.svg'
import './Parent.css'
import { useNavigate } from 'react-router';
import { useStore } from '../App_State';

function Details() {
const nav = useNavigate()

//These are global variable which controls the visibility of the navbar
const setPage = useStore((state:any) => state.setPage)

//This is to controll the postion of the bottom overlay menu which appear if you click on Take quiz
const [pos,setPos] = useState('-500vh')

//These 2 are for the 2 buttons on this page
const [clipPth,setCliPth] = useState('circle(100%')
const [buttonEffect,setbuttonEffect] = useState('circle(100%)')

//This sets the current page name for navbar visibility
useEffect(() => {
    setPage('DETAILS')
},[])

  return (
    <div className="Details">
        <div className="Top_Part">
            <h1>THE NBA QUIZ!!</h1>
        </div>
        <div className="Bottom_Part">
            <h1>The Daily NBA Quiz!!</h1>
            <div className="Info_Part">
                <div className="Ratings">
                    <div className="list_Info">
                        <ul>
                           <p><img src={Point}/>{" "}{" "}Leave a Comment</p>
                           <p><img src={Point}/>{" "}{" "}Save Quiz</p>
                           <p><img src={Point}/>{" "}{" "}CHallenge a friend</p>
                        </ul>
                    </div>
                    <div className="sub_Ratings">
                        <div className="Top_IconPart">
                            <div className="top_Users">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div className="Badge">+25</div>
                            </div>
                            <div className="bottom_Texts">
                                <p>People Enrolled!!</p>
                            </div>
                        </div>
                        <div className="Bottom_Rating_Part">
                            <div className="stars">
                                <img src={Star} height={15} alt="" />
                                <img src={Star} height={15} alt="" />
                                <img src={Star} height={15} alt="" />
                                <img src={Star} height={15} alt="" />
                                <img src={Star} height={15} alt="" />
                            </div>
                            <div className="texts">
                                <p>3 ratings(5.0)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subDetails">
                    <div className="quizInfo">
                        <p>
                            Today's quiz id about the current players and some of the retired legends of the world of NBA as it embarks towards the playoffs of it's 76th season!!!
                        </p>
                    </div>
                    <div className="quizDetails">
                        <ul>
                            <h3><img src={Point}/>{" "}{" "}40% passing percentage</h3>
                            <h3><img src={Point}/>{" "}{" "}5 Question</h3>
                            <h3><img src={Point}/>{" "}{" "}5 Mins</h3>
                            <h3><img src={Point}/>{" "}{" "}1 Ateempts Daily</h3>
                        </ul>
                    </div>
                   <button onClick={() =>{ setPos('0');setbuttonEffect('circle(0%)')}} style={{clipPath:buttonEffect, transition:'0.5s ease'}}>Take the Quiz!!</button>
                </div>
            </div>
        </div>

        <div style={{height:'100vh', width:'100vw', alignItems:'center', justifyContent:'center', background:'rgba(0,0,0,0.5)',transition:'0.8s ease',position:'absolute',bottom:pos,zIndex:5}}>
            <div style={{height:'60%',width:'100%'}}></div>
            <div style={{height:'40%',width:'100%',background:'white', transition:'0.8s ease', display:'flex',alignItems:'center', justifyContent:'flex-start',flexDirection:'column', borderRadius:'5px'}}>
                <h2 style={{fontSize:'2.5em', marginLeft:'-40vw', color:'black'}}>Quiz Rules</h2>
                <ul style={{fontSize:'1em', marginLeft:'-40vw', marginTop:'1vh'}}>
                    <h3 style={{color:'black'}}><img src={Point}/>{" "}{" "}5 Question</h3>
                    <h3 style={{color:'black'}}><img src={Point}/>{" "}{" "}5 Mins</h3>
                    <h3 style={{color:'black'}}><img src={Point}/>{" "}{" "}1 Ateempts Daily</h3>
                </ul>
                <button style={{marginTop:'10vh', width:'60%', borderRadius:'30px', clipPath:clipPth, transition:'0.3s ease'}} onClick={() => {setCliPth('circle(0%)');setTimeout(()=>{nav('/Quiz')},900)}}>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Details