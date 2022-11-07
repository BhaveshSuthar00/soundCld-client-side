import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { RightWrapper } from './Right'
import CardRight from './CardRight';
import CdPr from '../bubble.svg'
const RightSide = ({ page, query }) => {
  const unMountingComponent = useRef(true)
  const [parentToggle, setParentToggle] = useState(false);
  const [singerData, setSingerData] = useState([]);
  const [boolList, setBoolList] = useState([]);
  let arrayOf = [];
  const setToggleP = (value)=> {
    setParentToggle(value);
  }
  const getData = async (query) => {
    try {
      const response = await axios.get('https://soundcloud-serverside.herokuapp.com/');
      let data = await response.data;
      data = data.filter((el) => {

        if (el.singer.toLowerCase() === query.toLowerCase() || el.name.toLowerCase() === query.toLowerCase()) return true;
        else return false;
      })
      let arr = new  Array(data.length).fill(false);
      setBoolList(arr);
      setSingerData(data)
    } catch (e) {
      console.log(e)
    }
  }
  const changeToggler = (position) => {
    let newArr = boolList.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return false
      }
    })
    console.log(newArr)
    setBoolList(newArr);
    
  }
  useEffect(() => {
    if (unMountingComponent.current) {
      getData(query)
    }
    return (() => {
      unMountingComponent.current = false;
    })
  }, [query, page]);

  if (singerData.length === 0) {
    return <div>
      <div style={{ margin: 'auto', width: '100%' }}>
        <img src={CdPr} alt="" />
      </div>
    </div>
  }

  return (
    <RightWrapper>
      {
        singerData.map((elem, i) => {
          return <CardRight play_pause={boolList[i]} index={i} changeToggler={changeToggler} key={i} elem={elem}  />
        })
      }
    </RightWrapper>
  )
}

export default RightSide