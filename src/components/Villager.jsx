import React from 'react'
import { useState, useEffect } from 'react'

function Villager(props) {
  // state
  const [info, setInfo] = useState()
  // useEffect

  return (
    <div id='villagerCard'>
      {/* <h2>Villager Component</h2> */}
      {/* problem pulling data (property name convention is - i.e. file-name) */}
      <img src={props.villager?.image_uri} alt="villager" className='villagerIMG'/>
      <h2 className='villagerName'>{props.villager?.name['name-USen']}</h2>
      {/* <p>{props.villager?.species}</p> */}
      <p className='villagerPhrase'>"{props.villager?.saying}"</p>
    </div>
  )
}

export default Villager
