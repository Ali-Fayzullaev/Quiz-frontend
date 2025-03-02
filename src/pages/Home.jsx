import React from 'react'
import MenuLinks from '../components/MenuLinks'
function Home() {
  return (
    <div className="home-container container">
      <div className="home-content">
        <h1 className='home-title'>
          <span>Welcome to the</span>
          <span>Frontent Quiz</span>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
      <div className='home-nav-list'>
          <MenuLinks/>
        </div>
    </div>
  )
}

export default Home