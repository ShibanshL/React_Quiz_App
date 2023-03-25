import React, { useEffect } from 'react'
import './Parent.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Details from './Details'
import Quiz from './Quiz'
import Finish from './Finish'
import Navbar from './Navbar'
import { useStore } from '../App_State'
import { Navigate } from 'react-router'

function Parent() {
    
    //These are global variable which controls the visibility of the navbar
    const page = useStore((state:any) => state.page)
    const setPage = useStore((state:any) => state.setPage)

    //This program is called everytime page is changed
    useEffect(() => { navbar_visibility() },[page])

    //This is the program where we control the visibility of navbar
    const navbar_visibility = () => {
        if(page === 'QUIZ' || page === 'FINISH' || page == "HOME")
        {
            return null
        }

        else{
            return(
                <>
                <div className="Navbar">
                    <Navbar />
                </div>
                </>
            )
        }
    }

  return (
    <BrowserRouter>
        <div className="Main">
            {navbar_visibility()}
            <div className="Variable_Contents">
                <Routes>
                    <Route path='/*'>
                        <Route index element={<Home />} />
                        <Route path='Details' element={<Details />} />
                        <Route path='Quiz' element={<Quiz />} />
                        <Route path='Finish' element={<Finish />} />
                    </Route>
                </Routes>
            </div>
        </div>
     </BrowserRouter>
  )
}

export default Parent