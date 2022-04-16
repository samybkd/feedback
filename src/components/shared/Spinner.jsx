import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img src={spinner} alt="isLoading..." style={{
        width:'100 px',
        margin: 'auto' ,
        display:'block'
    }} />
  )
}

export default Spinner