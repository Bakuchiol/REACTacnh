import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Bugs from './pages/Bugs';
import Villagers from './pages/Villagers';


function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route index element={<Home />}/> */}
          <Route path='/' element={<Home />}/>
          <Route path='/Bugs' element={<Bugs />}/>
          <Route path='/Villagers' element={<Villagers />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>     
    </div>
  );
}

export default App;
