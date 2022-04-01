import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { RightWrapper } from './Right'

import CardRight from './CardRight';

const RightSide = ({page, query}) => {
  const [singerData, setSingerData ] = useState([]);
  const getData = async (query) => {
    try {
      const response = await axios.get('https://soundcloud-serverside.herokuapp.com/');
      let data = await response.data;
      data = data.filter((el)=>{

        if(el.singer.toLowerCase() === query.toLowerCase()) return true;
        else return false;
      })
      setSingerData(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData(query)
  }, [query,page]);
  if(singerData.length === 0) {
    return <>Loading...</>
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