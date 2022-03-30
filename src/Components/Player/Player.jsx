import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import song1 from '../../Music/song1.mp3'
import song2 from '../../Music/song2.mp3'
import song3 from '../../Music/song3.mp3'

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
    name: "song2",
    singer: "song2",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: song2
  },
  {
    name: "song1",
    singer: "song1",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc: song1
  }
];
const Player = () => {
  return (
    <div>
      <ReactJkMusicPlayer defaultVolume={0.5} theme={'dark'} audioLists={audioLists} mode={'full'} preload={false} showDownload={false}/>
    </div>
  )
}

export default Player