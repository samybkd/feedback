import React from 'react'
import Feedbackitem from './Feedbackitem'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList({handleDelete}) {
    const {feedback,isLoading}= useContext(FeedbackContext)

    if(!isLoading && ( !feedback || feedback.length ===0)){
        return <p>no feedback yet</p>
    }
  return ( isLoading ? (<Spinner/>) : (
    
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) =>(
          <motion.div
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
            <Feedbackitem
               key={item.id} 
               item={item}
            />
            </motion.div>
        ))}
       </AnimatePresence>
        </div>
  )
  )
}
FeedbackList.propTypes={
  feedback : PropTypes.array,
}
export default FeedbackList