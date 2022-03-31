import React, {useState, useEffect} from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import song1 from '../../Music/song1.mp3'
import song2 from '../../Music/song2.mp3'
import song3 from '../../Music/song3.mp3'
// https://soundcloud-serverside.herokuapp.com/ => to all the route songs
import axios from 'axios'
const audioLists = [
  {
    name: "Despacito",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
  },
  {
    name: "song3",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: song3
  },
  {
    name: "bhavesh",
    singer: "song2",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: song2
  },
  {
    name: "jeeven",
    singer: "bhavesh suthar",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: 'https://res.cloudinary.com/soundcloud-api-image/video/upload/v1648733055/1648711980107_hn7gly.mp3'
  }
];
const Player = () => {
  let localstr = JSON.parse(localStorage.getItem('click')) || [];
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get('https://soundcloud-serverside.herokuapp.com/').then((response) => {
  //     localStorage.setItem('click', JSON.stringify(response.data));
  //     console.log(response.data);
  //     setData(response.data);
  //   }).catch((err) => {console.log(err.message);})
  // }, [])
  return (
    <div>
      <ReactJkMusicPlayer defaultVolume={0} theme={'dark'} audioLists={localstr} mode={'full'} preload={false} showDownload={false}/>
    </div>
  )
}

export default Player