import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
const PlaylistRight = ({query, page}) => {
  const unMountingComponent = useRef(true)
  const [singerData, setSingerData ] = useState([]);
  const getData = async (query) => {
    try {
      const response = await axios.get('https://soundcloud-serverside.herokuapp.com/');
      let data = await response.data;
      data = data.filter((el)=>{

        if(el.singer.toLowerCase() === query.toLowerCase() || el.name.toLowerCase() === query.toLowerCase()) return true;
        else return false;
      })
      setSingerData(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if(unMountingComponent.current){
      getData(query)
    }
    return (()=> {
      unMountingComponent.current = false;
    })
  }, [query,page]);
  return (
    <div>PlaylistRight</div>
  )
}

export default PlaylistRight