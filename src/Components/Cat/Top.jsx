import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../constants";
import { ElementDiv } from "../Home/styleComponents";
import { v4 as uuid } from 'uuid';
export const Top = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const getData = () => {
    axios
      .get(`${BaseURL}/api/category/all`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };
  const dataRef = useCallback(getData, []);
  const handleSongPlaylist = (data) => {
    navigate('/playlist/' + data);
  };  
  useEffect(() => {
    dataRef();
    return(()=> {
      setCategory([]);
    })
  }, [ dataRef ]);

  return (
    <>
      {
        category && category.map((item) => (
          <ElementDiv key={uuid()}>
            <img
              onClick={() => {
                handleSongPlaylist(item.name);
              }}
              src={item.coverImg}
              alt={item.name}
            />
            <p>{ item.name }</p>
          </ElementDiv>
        ))
      }
    </>
  );
};
