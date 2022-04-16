import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
      <Card>
          <div className='about'>
            <h1>page about our project</h1>
            <p>this is a react app about feedback for products/services</p>

            <Link to='/'>back to home</Link>
          </div>
      </Card>
    
  )
}

export default AboutPage