import Card from "./shared/Card";
import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function Feedbackitem({item}) {
    const{deleteFeedback,editItem}=useContext(FeedbackContext)
    
  return (
  <Card reverse>
      <div className='num-display'>{item.rating}</div>
      <button onClick={()=> deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button className="edit" onClick={()=>editItem(item)}>
        <FaEdit color="purple"/>
      </button>
      <div className='text-display'>
          {item.text}
      </div>
      

  </Card>);
}
Feedbackitem.propTypes= {
  item : PropTypes.object.isRequired,
}
export default Feedbackitem;


