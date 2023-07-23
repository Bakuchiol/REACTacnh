import MainLayout from "../layout/MainLayout"
import Villager from "../components/Villager"

function Villagers(props) {
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
