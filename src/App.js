import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar'
import Player from './Components/Player/Player';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPlaylistHome, getTopList } from './Redux/Home/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getTopList());
    dispatch(getPlaylistHome());
  }, [ dispatch ])
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Player />
    </div>
  );
}

export default App;
