import React, {useState} from 'react'
import { AbosoluteDiv, Nav, WrapperAbosoluteDiv, WrapperDiv } from './Nav'
import { useNavigate, Link}  from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {
  const history = useNavigate();
  const [searchArtist, setSearchArtist] = useState('');
  const [boxState, setBoxState] = useState(false);
  const handleSearchSubmit = (e)=> {
    e.preventDefault();
    console.log(searchArtist)
    history(`/searchpage/${searchArtist}`)
  };
  return (
    <>
    <WrapperDiv>
    <Nav>
      <div>
        <div>
          <div>
          <BsFillPeaceFill />
          </div>
          <div>
            <Link to="/">Home</Link>
          </div> 
        </div>
        <div>
          Stream
        </div>
        <div>
          Library
        </div>
      </div>
      <div>
        <form onSubmit={(e)=>{handleSearchSubmit(e)}}>
          <input type="text" placeholder="Search" onChange={(e)=>{setSearchArtist(e.target.value)}} />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </div>
      <div>
        <div>
          Upload
        </div>
        <div>
            Sign in
        </div>
        <div className="Last_div_menu" onClick={()=> setBoxState(!boxState)}>
          <div>
            <FiMoreHorizontal />

          </div>
        </div>
      </div>
    </Nav>
    </WrapperDiv>
    <WrapperAbosoluteDiv>
          {!boxState ? null : 
          <AbosoluteDiv>
            <ul>
            <li>login out</li>
          </ul>
          </AbosoluteDiv>
          }
    </WrapperAbosoluteDiv>
    </>
  )
}

export default  Navbar;