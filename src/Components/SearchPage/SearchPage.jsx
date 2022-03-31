import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from './Search'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
const SearchPage = () => {
  const {id} = useParams();
  useEffect(() => {
    
  }, [])
  return (
    <div style={{backgroundColor : '#f4f4f4'}}>
      <Wrapper>
        <div>Search Results "{id}"</div>
        <div>
          <div>
            <LeftSide />
          </div>
          <div>
            <RightSide />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default SearchPage