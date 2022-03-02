import React, {createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'

import Home from './components/Home'
import Hasil from './components/Hasil'

export const hasilContext = createContext()

function App() {
  const [hasil, setHasil] = useState([])
  return (
    <>
      <Router>
      <div className="header">
          <h1>Bubble Short</h1>
      </div>
          <hasilContext.Provider value={{hasil, setHasil}}>
        <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route path="/hasil" element={<Hasil />} /> 
        </Routes>
          </hasilContext.Provider>
      </Router>
    </>
  );
}

export default App;
