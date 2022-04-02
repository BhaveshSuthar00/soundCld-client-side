import React, {useState, useEffect, useContext, useRef} from 'react'
import { AbosoluteDiv, Nav, WrapperDiv } from './Nav'
import { useNavigate, Link}  from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { ChangeSong } from "../../Contexts/Status";

const Navbar = () => {
  const history = useNavigate();
  const {isLogged,statusChange, handleLogin, userName,removeUserName, handleUserName,handleStatus2} = useContext(ChangeSong)
  const [searchArtist, setSearchArtist] = useState('');
  const [boxState, setBoxState] = useState(false);
  const handleSearchSubmit = (e)=> {
    e.preventDefault();
    history(`/searchpage/everything?q=${searchArtist}`)
  };
  useEffect(()=>{
    handleUserName();
  },[statusChange])
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
        {userName !== null ? <p>{userName}</p> : 
            <Link to='/login' >Sign in</Link>
        }
        </div>
        <div className="Last_div_menu" onClick={()=> setBoxState(!boxState)}>
          <div className="Last_div_m">
            <FiMoreHorizontal />
            {!boxState ? null : 
            <AbosoluteDiv>
              <ul>
                <li>About us</li>
                <li>Legal</li>
                <li>Copyright</li>
                <li>For creators</li>
                <li>Blog</li>
                <li>{isLogged ? <Link to='/signup' >Signup</Link> : <p onClick={()=>{
                  handleLogin(false)
                  removeUserName();
                  handleStatus2();
                }}>Log out</p>}</li>
              </ul>
            </AbosoluteDiv>
            }

          </div>
        </div>
      </div>
    </Nav>
    </WrapperDiv>
    </>
  )
}

export default  Navbar;