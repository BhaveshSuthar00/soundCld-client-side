import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { RightWrapper } from './Right'

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
      setSingerData(...data)
      console.log(data.length, data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData(query)
    // axios.get('https://soundcloud-serverside.herokuapp.com/')
  }, [query,page]);
  return (
    <RightWrapper>
      <div>
      </div>
    </RightWrapper>
  )
}

export default RightSide