import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../constants";
import { ElementDiv } from "../Home/styleComponents";

export const Playlist = () => {
  const navigate = useNavigate();
  const [getplayist, setGetPlaylist] = useState([]);

  const getData = () => {
    axios
      .get(`${BaseURL}/list`)
      .then((response) => {
        setGetPlaylist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSongPlaylist = (data) => {
    navigate('/playlist/'+data);
  };
  useEffect(() => {
    getData();
    return(()=> {
      setGetPlaylist([]);
    })
  }, []);
  return (
    <>
      {
        getplayist && getplayist.map((item) => {
          return <ElementDiv key={item._id}>
            <img onClick={() => handleSongPlaylist(item.name)} alt={item.name} src={item.coverImg}/>
            <p>{item.name}</p>
          </ElementDiv>
        })
      }
    </>
  )
};