import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Wrapper } from './Search'
import LeftSide from './LeftSide/LeftSide'
import AlbumRight from './AlbumRight/AlbumRight'
import PersonRight from './PersonRight/PersonRight'
import PlaylistRight from './PlaylistRight/PlaylistRight'
import RightSide from './RightSide/RightSide'
const SearchPage = () => {
  const {id} = useParams();
  
  const [searchParams] = useSearchParams();
  const query2 = (searchParams.get('q'))
  const [query, setQuery] = useState();
  const [person, setPerson] = useState();
  const [album, setAlbum] = useState();
  const [playlist, setPlaylist] = useState();
  useEffect(() => {
    if(id === 'everything' || id === 'track'){
      setPerson(null)
      setAlbum(null)
      setPlaylist(null)
      setQuery(id)
    }
    else if(id === 'people'){
      setAlbum(null)
      setPlaylist(null)
      setQuery(null)
      setPerson(id);
    }
    else if(id === 'album'){
      setPlaylist(null)
      setPerson(null)
      setQuery(null)
      setAlbum(id);
      
    }
    else if(id === 'playlist') {
      setPerson(null)
      setAlbum(null)
      setQuery(null)
      setPlaylist(id);
      
    }
  }, [id])
  return (
    <div style={{backgroundColor : '#f4f4f4', height: '100%',minHeight:"100%", paddingBottom : "1%"}}>
      <Wrapper >
        <div>Search Results "{query2}"</div>
        <div>
          <div>
            <LeftSide query={query2} page={id} />
          </div>
          <div>
            {query === 'everything' || query === 'track'? 
            <RightSide query={query2} page={id}  />
            : null}
            {person ==='people' ? <PersonRight query={query2} page={id} /> : null}
            {album ==='album' ? <AlbumRight query={query2} page={id} /> : null}
            {playlist ==='playlist' ? <PlaylistRight query={query2} page={id} /> : null}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default SearchPage