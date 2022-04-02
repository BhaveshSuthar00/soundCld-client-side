import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Wrapper } from './Search'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
const SearchPage = () => {
  const {id} = useParams();
  const [searchParams] = useSearchParams();
  const query2 = (searchParams.get('q'))
  useEffect(() => {
    
  }, [])
  return (
    <div style={{backgroundColor : '#f4f4f4', height: '100%',minHeight:"100%", paddingBottom : "1%"}}>
      <Wrapper >
        <div>Search Results "{query2}"</div>
        <div>
          <div>
            <LeftSide query={query2} page={id}/>
          </div>
          <div>
            <RightSide query={query2} page={id} />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default SearchPage