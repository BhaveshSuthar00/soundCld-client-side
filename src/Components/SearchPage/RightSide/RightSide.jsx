import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { RightWrapper } from './Right'
import CardRight from './CardRight';
import CdPr from '../bubble.svg'
import { BaseURL } from '../../../constants';
import { Box, Image } from '@chakra-ui/react';
const RightSide = ({ page, query }) => {
  const [singerData, setSingerData] = useState([]);
  const [boolList, setBoolList] = useState([]);
  const [loading , setLoading] = useState(false);
  const getData = async (query) => {
    setLoading(true);
    try {
      
      const response = await axios.get(`${BaseURL}`);
      let data = await response.data;
      data = data.filter((el) => {
        
        if (el.singer.toLowerCase() === query.toLowerCase() || el.name.toLowerCase() === query.toLowerCase()) return true;
        else return false;
      })
      let arr = new  Array(data.length).fill(false);
      setLoading(false);
      setBoolList(arr);
      setSingerData(data);
    } catch (e) {
      console.log(e)
    }
  }
  const changeToggler = (position) => {
    let newArr = boolList.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return false;
      }
    })
    setBoolList(newArr);
    
  }
  const setLoadingFun = (value) => {
    setLoading(value);
  }
  useEffect(() => {
    getData(query)
    return (() => {
      setSingerData([]);
      setBoolList([]);
    })
  }, [query, page]);

  if (singerData.length === 0 || loading) {
    return <>
      <Box style={{ display : 'flex', margin: 'auto', width: '100%' }}>
        <Image src={CdPr} ml={'auto'} mr={'auto'}  alt="" />
      </Box>
    </>
  }

  return (
    <RightWrapper>
      {
        singerData.map((elem, i) => {
          return <CardRight setLoading={setLoadingFun} play_pause={boolList[i]} index={i} changeToggler={changeToggler} key={i} elem={elem}  />
        })
      }
    </RightWrapper>
  )
}

export default React.memo(RightSide)