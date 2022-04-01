import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar'


import { useState, useEffect, useContext } from 'react';
import Player from './Components/Player/Player';
import { ChangeSong } from './Contexts/Status';
function App() {
  const {statusChange , handleStatus2} = useContext(ChangeSong)
  const [status, setStatus] = useState(false)
  const handleStatus = () => {
    setStatus(!status)
  }
  useEffect(()=>{},[statusChange])
  return (
    <div className="App">
      <Navbar />
      <AllRoutes status={status} handleStatus={handleStatus} />
      <Player />
    </div>
  );
}

export default App;
