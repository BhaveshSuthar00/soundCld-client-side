import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Wrapper } from './Search'
import LeftSide from './LeftSide/LeftSide'
import PersonRight from './PersonRight/PersonRight'
import RightSide from './RightSide/RightSide'
const SearchPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query2 = (searchParams.get('q'));
  return (
    <div style={{ backgroundColor: '#f4f4f4', height: '100%', minHeight: "100%", paddingBottom: "1%" }}>
      <Wrapper >
        <div>Search Results "{query2}"</div>
        <div>
          <div>
            <LeftSide query={query2} page={id} />
          </div>
          <div>
            {id === 'everything' || id === 'track' || id === 'album' || id === 'playlist' ?
              <RightSide query={query2} page={id} />
              : null}
            {id === 'people' ? <PersonRight query={query2} page={id} /> : null}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default SearchPage