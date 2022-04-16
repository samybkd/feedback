import Header from "./components/Header"
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import { useState } from "react"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){
    const  [feedback,setFeedback]=useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }
    const addFeedback=(newFeedback)=>{
        newFeedback.id= uuidv4
        setFeedback([newFeedback,...feedback])
    }

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
            <Routes>
            <Route exact path='/' element={<>
             <FeedbackForm handleAdd={addFeedback}/>
             <FeedbackStats />
             <FeedbackList handleDelete={deleteFeedback}/>
             <AboutIconLink/>
             </>
            }>
             </Route>
             <Route path='/about' element={<AboutPage/>} />
            </Routes>
            
            </div>
            
        </Router>  
    </FeedbackProvider>
    )
}
export default App