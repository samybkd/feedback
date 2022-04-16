import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import { useState } from "react"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10)
    const [message,setMessage]=useState('')
    const [btndis,setBtnDisabled]=useState(true)
    const {addFeedback}=useContext(FeedbackContext)

    const handleTextChange = ({ target: { value } }) => { // 👈  get the value
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
          
      // prettier-ignore
        } else if (value.trim().length < 10) { // 👈 check for less than 10
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setText(value)
      }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback= {
                text,
                rating,
            }
            addFeedback(newFeedback)
            setText('')
        }
        
    }
  return (
      <Card reverse>
          <form onSubmit={handleSubmit}>
              
              <h2>How would you rate your service with us ?</h2>
              <RatingSelect select={(rating)=> setRating(rating)}/>
              <div className="input-group">
              <input 
              value={text}
              onChange={handleTextChange} 
              
              type="text" 
              placeholder="write us a review"
              />
              <Button
              type="submit"
              version="secondary" 
              isBDisabled={btndis}
              >Send 
              </Button>
              
              </div>
              {message && <div className="message">
                  {message}
              </div>}
          </form>
      </Card>
  )
}

export default FeedbackForm