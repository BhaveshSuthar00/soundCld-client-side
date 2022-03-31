import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Player from './Components/Player/Player';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Player />
    </div>
  );
}

export default App;
