import React, {useEffect} from 'react'
import { LeftWrapper, ButtonDiv } from './Left'
import { useNavigate} from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaRegWindowRestore } from 'react-icons/fa';
import { BsFillPersonFill,BsSoundwave } from 'react-icons/bs';

const LeftSide = ({ page , query}) => {
  const navigate = useNavigate();
  const handleSearchQuery = (element) => {
    navigate(`/searchpage/${element}?q=${query}`)
  }
  let array = ['everything', 'track', 'playlist', 'album', 'people']
  useEffect(()=> {
    for(let i = 0; i < array.length; i++) {
      if(page === array[i]) {
        let el = document.querySelector(`.${array[i]}`)
        el.style.backgroundColor ='#ff5500'
        el.style.color = 'white';
      } else {
        let el = document.querySelector(`.${array[i]}`)
        el.style.backgroundColor ='white'
        el.style.color = 'black';

      }
    }
  }, [page])
  return (
    <LeftWrapper>
      <ButtonDiv className="everything"style={{backgroundColor : '#ff5500', color : 'white'}} onClick={()=>{handleSearchQuery('everything')}}>
        <div>
          <BiSearchAlt2 />
        </div>
        <div>
          Everything
        </div>
      </ButtonDiv>
      <ButtonDiv className="track"  onClick={()=>{handleSearchQuery('track')}}>
        <div>
          <BsSoundwave />
        </div>
        <div>Tracks</div>
      </ButtonDiv>

      <ButtonDiv className="people"  onClick={()=>{handleSearchQuery('people')}}>
        <div>
          <BsFillPersonFill />
        </div>
        <div>People</div>
      </ButtonDiv>
      
      <ButtonDiv className="album"  onClick={()=>{handleSearchQuery('album')}}>
        <div>
          <FaRegWindowRestore />
        </div>
        <div>Albums</div>
      </ButtonDiv>
      
      <ButtonDiv  className='playlist' onClick={()=>{handleSearchQuery('playlist')}}>
        <div>
          <FaRegWindowRestore />
        </div>
        <div>Playlists</div>
      </ButtonDiv>
    </LeftWrapper>
  )
}

export default LeftSide