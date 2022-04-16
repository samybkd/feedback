import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"
const FeedbackContext= createContext();


export const FeedbackProvider=({children})=>{
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }}

    const addFeedback=(newFeedback)=>{
            newFeedback.id= uuidv4()
            setFeedback([newFeedback,...feedback])
        }

    const [feedback,setFeedback]=useState([
        {
        id:1,
        text:'this is from context',
        rating:10,
         },
          {
              id:2,
              text:'this item 2',
              rating: 8
          },
          {
            id:3,
            text:'this item 3',
            rating: 7
        }
    ]);
    return <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback}}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext