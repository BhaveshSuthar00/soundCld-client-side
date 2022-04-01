import axios from "axios";
import { useEffect, useState } from "react";
import { ElementDiv } from "../Home/styleComponents";

export const Top = ({handleStatus}) => {
  const [topTracksdata, setToptracksData] = useState([]);
  // const [pop, setPop] = useState([]);
  // const [rock, setrock] = useState([]);
  // const [jezz, setjezz] = useState([]);
  let dataLocalStroage = JSON.parse(localStorage.getItem('click')) || [];
  // const [classical, setClassical] = useState([]);
  const [category, setCategory] = useState({
    pop : [], 
    rock : [],
    jezz : [],
    classical : []
  })
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // axios
    //   .get("https://soundcloud-serverside.herokuapp.com/")
    //   .then(({ data }) => {
    //     const finalData = data.filter((e) => {
    //       if (e.playlist[0] === "top100") {
    //         return e;
    //       }
    //     });
    //     setToptracksData(finalData);
    //   });
    axios.get('https://soundcloud-serverside.herokuapp.com/api/category/all').then((response) => {
    setCategory(response.data);

    }).catch((err) => {
      console.log(err);
    })
  };
  const handleSongPlaylist = (data) =>{
    let cat = [];
    if(data === 'pop') {
      console.log(data, category.pop)
      cat = category.pop;
    }
    while(dataLocalStroage.length>0){
      dataLocalStroage.pop();
    }
    dataLocalStroage.push(cat);
    handleStatus()
    localStorage.setItem('click', JSON.stringify(dataLocalStroage));
  }
  return (
    <>
      {/* {topTracksdata.map((e) => {
        return (
          <>
            <div>
              <img src={e.cover} alt="" />
              <p> {e.category}</p>
              <p> {e.playlist}</p>
            </div>
          </>
        );
      })} */}
      <div>
        <img onClick={()=>{handleSongPlaylist('pop')}} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-album-art-design-template-905e52dee4423a5f33b0c508665cf7bf_screen.jpg?ts=1598362553" alt="" />
        <p>pop</p>
      </div>
      <div>
        <img onClick={()=>{handleSongPlaylist('pop')}} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-album-art-design-template-905e52dee4423a5f33b0c508665cf7bf_screen.jpg?ts=1598362553" alt="" />
        <p>pop</p>
      </div>
      <div>
        <img onClick={()=>{handleSongPlaylist('pop')}} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-album-art-design-template-905e52dee4423a5f33b0c508665cf7bf_screen.jpg?ts=1598362553" alt="" />
        <p><Link to='/'>classical</Link></p>
      </div>
    </>
  );
};
