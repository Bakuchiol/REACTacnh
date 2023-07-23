import React from 'react'

function Villager(props) {
  return (
    <div>
      <h2>Villager Component</h2>
      {/* problem pulling data (property name convention is - i.e. file-name) */}
      <h3>{props.villager.name['name-USen']}</h3>
    </div>
  )
}

export default Villager
