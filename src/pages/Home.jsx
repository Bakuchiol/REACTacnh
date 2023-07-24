import React, { useEffect, useState } from "react"
import MainLayout from "../layout/MainLayout"
import Villager from "../components/Villager"
// import api call
import { getVillagers } from '../api/api_calls'

function Home(props) {
  // state
  const [villagers, setVillagers] = useState([]) // data is an array
  // use api
  useEffect(()=>{
    // call api
    getVillagers()
    // grab data from api
    // .then(villagerData => console.log(villagerData)) // check if fetched data successfully
    // villagerData is an array
    .then(villagerData => setVillagers(villagerData)) // villager data from api (save data to state)
  }, [])

  return (
    <MainLayout>
      <div id='villagerWrap'>
        <div className="villagerTitle">
          <h1>ACNH Villager's List</h1>
        </div>
        <div id='villagerComp'>
          {/* map each villager data to a component and pass state*/}
          {villagers.map((villager) => {
            return (
              // villager.id = each villager has unique id from api
              <Villager key={villager.id} villager={villager}/>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
