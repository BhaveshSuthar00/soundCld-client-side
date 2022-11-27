import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { PersonWrapper } from './PersonCart'
import CdPr from '../bubble.svg'
import { BaseURL } from '../../../constants'
const PersonRight = ({query,page}) => {
  const unMountingComponent = useRef(true);
  const [followState, setFollow] = useState(false);
  const [singerData, setSingerData ] = useState({});
  const [dataLocal, setDataLocal] = useState([]);
  const getData = async (query) => {
    try {
      const response = await axios.get(`${BaseURL}/`);
      let data = await response.data;
      data = data.filter((el)=>{
        if(el.singer.toLowerCase() === query.toLowerCase() || el.name.toLowerCase() === query.toLowerCase()){
          return true;
        }
        else return false;
      })
      setDataLocal(data);
      setSingerData(data[0]);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if(unMountingComponent.current){
      getData(query);
    }
    return (()=> {
      unMountingComponent.current = false;
    })
  }, [query, page]);
  const handleLocalStorage = ()=>{
    let array = [];
    array.push(dataLocal)
    localStorage.setItem('click', JSON.stringify(array));
  }
  const follow = (el) =>{
    setFollow(!followState);
    localStorage.setItem('follow',JSON.stringify(dataLocal))
  }
  if(dataLocal.length ===  0) {
    return <div>
      <div style={{margin : 'auto' , width : '100%'}}>
        <img src={CdPr} alt="" />
      </div>
    </div>
  }
  return (
    <div>
        <PersonWrapper >
            <div className="img" onClick={()=> {handleLocalStorage()}}>
              <img src={singerData.cover} alt="" />
            </div>
            <div className="text">
              <h1>{singerData.singer}</h1>
              <button onClick={()=>{follow(followState)}}>
                {followState ? "+ following" : "follow"}
              </button>
            </div>
        </PersonWrapper>
    </div>
  )
}

export default PersonRight