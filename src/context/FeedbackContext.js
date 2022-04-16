import { createContext, useState,useEffect } from "react";
const FeedbackContext= createContext();


export const FeedbackProvider=({children})=>{
    const[isLoading,setisLoading]=useState(true)
    useEffect(() => {
      FetchFeedback()
    }, [])

    const FetchFeedback =async() =>{
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data= await response.json()
        setFeedback(data)
        setisLoading(false)
    }
    
    const deleteFeedback = async(id) => {
        if(window.confirm('are you sure you want to delete?')){
            await fetch(`feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item)=>item.id !== id))
        }}

    const addFeedback=async(newFeedback)=>{
            const response=await fetch("/feedback",{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFeedback),
            })
            const data=await response.json()
            setFeedback([data,...feedback])
        }
    const [FeedbackEdit,setItemEdit]=useState({
        item:{},
        edit:false
    })
    const editItem=(item)=>{
        setItemEdit({
            item: item,
            edit : true
        })
    }
    const updateItem=async(id,editeditem)=>{

        const response = await fetch(`feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(editeditem)
        })
        const data= await response.json()
        setFeedback(
            feedback.map((item)=>(
            item.id ===id ? {...item,...data} : item
        ))
        )
    }

    const [feedback,setFeedback]=useState([]);

    return <FeedbackContext.Provider value={{feedback,isLoading,FeedbackEdit,deleteFeedback,addFeedback,editItem,updateItem}}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext