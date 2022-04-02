import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import { RightWrapper } from './Right'
import CardRight from './CardRight';
import CdPr from '../bubble.svg'
const RightSide = ({page, query}) => {
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
  
  if(singerData.length === 0) {
    return <div>
      <div style={{margin : 'auto' , width : '100%'}}>
        <img src={CdPr} alt="" />
      </div>
    </div>
  }

  return (
    <RightWrapper>
      {
        singerData.map((elem, i) =>{
          return <CardRight key={i} elem={elem} index={i} />
        })
      }
    </RightWrapper>
  )
}

export default RightSide