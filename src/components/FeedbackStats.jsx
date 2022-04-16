import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats({}) {
  const {feedback}=useContext(FeedbackContext)
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average)? 0: average } </h4>
    </div>
  )
}
FeedbackStats.prototype={
  feedback:PropTypes.array.isRequired
}
export default FeedbackStats