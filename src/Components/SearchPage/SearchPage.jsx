import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Wrapper } from './Search'
import LeftSide from './LeftSide/LeftSide'
import PersonRight from './PersonRight/PersonRight'
import RightSide from './RightSide/RightSide'
const SearchPage = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const query2 = (searchParams.get('q'));
  const [query, setQuery] = useState();
  const [person, setPerson] = useState();
  useEffect(() => {
    if (id === 'everything' || id === 'track' || id === 'playlist' || id === 'album') {
      setPerson(null)
      setQuery(id)
    }
    else if (id === 'people') {
      setQuery(null)
      setPerson(id);
    }

  }, [id])
  return (
    <div style={{ backgroundColor: '#f4f4f4', height: '100%', minHeight: "100%", paddingBottom: "1%" }}>
      <Wrapper >
        <div>Search Results "{query2}"</div>
        <div>
          <div>
            <LeftSide query={query2} page={id} />
          </div>
          <div>
            {query === 'everything' || query === 'track' || query === 'album' || query === 'playlist' ?
              <RightSide query={query2} page={id} />
              : null}
            {person === 'people' ? <PersonRight query={query2} page={id} /> : null}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default SearchPage