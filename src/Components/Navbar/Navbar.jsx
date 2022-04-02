import React, {useState, useEffect, useContext} from 'react'
import { AbosoluteDiv, Nav, WrapperDiv } from './Nav'
import { useNavigate, Link}  from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { ChangeSong } from "../../Contexts/Status";

const Navbar = () => {
  const {handleStatus2} = useContext(ChangeSong)
  const history = useNavigate();
  const [userName, setUserName] = useState('');
  const [searchArtist, setSearchArtist] = useState('');
  const [boxState, setBoxState] = useState(false);
  const handleSearchSubmit = (e)=> {
    e.preventDefault();
    console.log(searchArtist)
    history(`/searchpage/everything?q=${searchArtist}`)
  };
  useEffect(()=>{
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
    if(loginStatus !== null){
      setUserName(loginStatus)
      handleStatus2();
    }
  },[])
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
        {userName !== '' ? {userName}  : 
            "Sign in"
        }
        </div>
        <div className="Last_div_menu" onClick={()=> setBoxState(!boxState)}>
          <div className="Last_div_m">
            <FiMoreHorizontal />
            {!boxState ? null : 
            <AbosoluteDiv>
              <ul>
                <li>login out</li>
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