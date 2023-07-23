import React from 'react'

function Villager(props) {
  return (
    <div id='villagerCard'>
      <h2>Villager Component</h2>
      {/* problem pulling data (property name convention is - i.e. file-name) */}
      <img src={props.villager?.image_uri} alt="villager" />
      <h2>{props.villager?.name['name-USen']}</h2>
      <p>{props.villager?.species}</p>
      <p>"{props.villager?.saying}"</p>
    </div>
  )
}

export default Villager
