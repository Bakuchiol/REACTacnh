import MainLayout from "../layout/MainLayout"
import Villager from "../components/Villager"
import { useEffect, useState } from "react"
// import api call
import { getVillagers } from '../api/api_calls'

function Villagers(props) {
  // state
  const [villagers, setVillagers] = useState()
  // use api
  useEffect(()=>{
    // call api
    getVillagers()
    // grab data from api
    .then(villagerData => console.log(villagerData))
  })

  return (
    <MainLayout>
      <div>
        <h1>*VILLAGERS PAGE*</h1>
        <Villager />
      </div>
    </MainLayout>
  )
}

export default Villagers
