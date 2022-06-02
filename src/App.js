import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import Pokedex from './components/Pokedex';
import PokedexDetail from './components/PokedexDetail';
import ProtectedRoutes from './components/PortetedRoutes';
import Setting from './components/Setting';

function App() {
  return (
    <HashRouter>
        <div className="App">

          <Routes>
            <Route path='/' element={<Home />}  />
            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedex/:id' element={<PokedexDetail />}/>
              <Route path='/setting' element={<Setting />}/>
            </Route>
          </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
