import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Bugs from './pages/bug_data/Bugs';
import Villagers from './pages/Villagers';
import BugInfo from './pages/bug_data/BugInfo';


function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route index element={<Home />}/> */}
          <Route path='/' element={<Home />}/>
          <Route path='/Bugs' element={<Bugs />}/>
          <Route path='/Bugs-Info' element={<BugInfo />}/>
          <Route path='/Villagers' element={<Villagers />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>     
    </div>
  );
}

export default App;
