import { useNavigate } from "react-router-dom";
import { ElementDiv } from "../Home/styleComponents";
import { v4 as uuid } from 'uuid';
import { useSelector } from "react-redux";
export const Top = () => {
  const navigate = useNavigate();
  const { top } = useSelector(store => store.home);
  const handleSongPlaylist = (data) => {
    navigate('/playlist/' + data);
  };  
  return (
    <>
      {
        top && top.map((item) => (
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
