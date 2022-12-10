import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ElementDiv } from "../Home/styleComponents";

export const Playlist = () => {
  const navigate = useNavigate();
  const { playlist } = useSelector(store => store.home);
  const handleSongPlaylist = (data) => {
    navigate('/playlist/'+data);
  };
  return (
    <>
      {
        playlist && playlist.map((item) => {
          return <ElementDiv key={item._id}>
            <img onClick={() => handleSongPlaylist(item.name)} alt={item.name} src={item.coverImg}/>
            <p>{item.name}</p>
          </ElementDiv>
        })
      }
    </>
  )
};