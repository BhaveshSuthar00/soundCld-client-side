import './App.css';
import AllRoutes from './Routers/AllRoutes';
import Navbar from './Components/Navbar/Navbar'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Player from './Components/Player/Player';
function App() {
  const [token, setToken] = useState('');
  // const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  // const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  // const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
  // const [trackDetail, setTrackDetail] = useState(null);

  const spotify = {
    ClientId: 'b55be9ce4166448f825c09159f8169c2',
    ClientSecret: '83633371899e418ea7244b2c70ad53e',
  }
  useEffect(() =>{
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic '+btoa(spotify.ClientId+ ":"+spotify.ClientSecret)
      },
      data : 'grant_type=client_credentials',
      method : 'POST'
    }).then((tokenresponse) => {
      setToken(tokenresponse.data.access_token);
      localStorage.setItem('access_token',JSON.stringify(tokenresponse.data.access_token))
      
      // axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
      //   method: 'GET',
      //   headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      // })
      // .then (genreResponse => {        
      //   setGenres({
      //     selectedGenre: genres.selectedGenre,
      //     listOfGenresFromAPI: genreResponse.data.categories.items
      //   })
      // });

        // playlist categories function
    //   axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization' : 'Bearer ' + token
    //   }
    // })
    // .then(tracksResponse => {
    //   setTracks({
    //     selectedTrack: tracks.selectedTrack,
    //     listOfTracksFromAPI: tracksResponse.data.items
    //   })
    // });
    })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Player />
    </div>
  );
}

export default App;
