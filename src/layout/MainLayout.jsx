import React from 'react'
import NavBar from '../components/NavBar'

function MainLayout({children}) {
  return (
    <div>
      <NavBar />
      <div id='children'>{children}</div>
    </div>
  )
}

export default MainLayout
