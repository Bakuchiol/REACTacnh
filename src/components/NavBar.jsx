import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='navBar'>
      <h1>Animal Crossing</h1>
      <ul className='navUl'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Villagers'>Villagers</Link></li>
        <li><Link to='/Bugs'>Bugs</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
