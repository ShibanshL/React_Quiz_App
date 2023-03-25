import React, { useEffect, useState, useRef } from 'react'
import questions from '../questions.json'
import { useNavigate } from 'react-router'
import { useScore, useStore  } from '../App_State'

//This takes the countdownm as input and then further formats it
const formatTime = (time:any) => {
    let Minutes:string|number = Math.floor(time/60);
    let Seconds:string|number = Math.floor(time - Minutes * 60)

    if(Minutes <= 10){ 
        Minutes = '0' + Minutes
    }
    if(Seconds <= 10){
        Seconds = '0' + Seconds
    }
    return Minutes+':'+Seconds
}

function Quiz() {
    let nav = useNavigate()

    //These are the global varieble which keeps track of the score
    const setScore = useScore((state:any) => state.setScore)
    const score = useScore((state:any) => state.score)

    
    //These are global variable which controls the visibility of the navbar
    const setPage = useStore((state:any) => state.setPage)

    //This is to iterate throgh the questions array
    const [quizQuestion,setQuizQuestion] = useState(0)

    //This is usefor calculating the score
    const [buttonClicked,setButtonClicked] = useState('')

    //this is use to monitor the question number you are on also shown on the badge
    const [questionNo, setQuestionNO] = useState(1)

    //These controls the timeer
    const [countDown,setCountDown] = useState(900)
    const timerID:any = useRef()

    //This is the function which does the countdown
    useEffect(()=>{
        timerID.current = setInterval(() => {
            setCountDown(pre => pre - 1)
        },1000)

        return () => clearInterval(timerID.current)
    },[])

    useEffect(() => {
        setPage("QUIZ")
    },[])

    //This is the function which sends us to finshi page if countdown is at 0
    useEffect(()=>{
        if(countDown <= 0){
            clearInterval(timerID.current)
            nav('/FInish')
        }
    },[countDown])
    
    //This useeffect clears up the value of button clicked so at every new question all the buttons are avaialble to us
    useEffect(()=>{
        setButtonClicked('')
    },[quizQuestion])


    //This function calculates the total marks
    const totalMarks = (e:string) => {
        setButtonClicked(e)
        if(e === questions[quizQuestion].answer){
            setScore(score+1)
        }
    }

    //This function sends to finish page if we have attempted all the questions
    const finishingTest = () => {
        if(quizQuestion<4){
            setQuizQuestion(quizQuestion+1)
            setQuestionNO(questionNo+1)
        }
        if(quizQuestion === 4){
            nav('/Finish')
        }
    }

  return (
   <div className="Quiz">
        <div className="info_Badges">
            <div className="numOfQuestions">{questionNo}/5</div>
            <div className="Timer">{formatTime(countDown)}</div>
        </div>
        <div className="Questions">
            <h1>
                {questions[quizQuestion].question}
            </h1>
            </div>
        <div className="Options">

            {questions[quizQuestion].options.map((e:any, id:number)=>{
                return(
                    <>
                        <button key={id} onClick={(pre:any) => {totalMarks(pre.target.value)}} style={buttonClicked  && buttonClicked !== e?{background:'rgb(128, 187, 255)'}:{}} value={e} disabled={buttonClicked  && buttonClicked !== e?true:false}>{e}</button>
                    </>
                )
            })}
          
        </div>
        <div className="next_button">
            <button onClick={() => {finishingTest()}}>{quizQuestion < 4?'Next':'Finish'}</button>
        </div>
   </div>
  )
}

export default Quiz