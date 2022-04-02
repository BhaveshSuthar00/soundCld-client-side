import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar'

import { useState } from 'react';
import Player from './Components/Player/Player';
function App() {
  const [status, setStatus] = useState(false)
  const handleStatus = () => {
    setStatus(!status)
  }
  return (
    <div className="App">
      <Navbar />
      <AllRoutes status={status} handleStatus={handleStatus} />
      <Player />
    </div >
  );
}

export default App;
