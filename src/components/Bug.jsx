import React from 'react'

function Bug({bug}) {
  return (
    <div id='bugCard'>
      <img src={bug?.icon_uri} alt="bug" />
      <p className='bug'>{bug?.name['name-USen']}</p>
    </div>
  )
}

export default Bug
