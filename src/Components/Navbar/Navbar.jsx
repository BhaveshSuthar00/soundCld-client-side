import React, { useState, useEffect, useContext } from 'react'
import { AbosoluteDiv, Nav, WrapperDiv } from './Nav'
import { useNavigate, Link } from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { ChangeSong } from "../../Contexts/Status";
import { useSelector, useDispatch } from 'react-redux'
import { apiCallLogout, removeUser } from '../../Redux/Login/Action';
const Navbar = () => {
  const history = useNavigate();
  const { user, loggedOut } = useSelector((store)=> store.login);
  const dispatch = useDispatch();
  const {  statusChange, handleUserName } = useContext(ChangeSong)
  const [searchArtist, setSearchArtist] = useState('');
  const [boxState, setBoxState] = useState(false);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history(`/searchpage/everything?q=${searchArtist}`)
  };
  useEffect(() => {
    handleUserName();
  }, [statusChange])
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
              <Link to="/library">Library</Link>

            </div>
          </div>
          <div>
            <form onSubmit={(e) => { handleSearchSubmit(e) }}>
              <input type="text" placeholder="Search" onChange={(e) => { setSearchArtist(e.target.value) }} />
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
              {user.userName ? <p>{user.userName}</p> :
                <Link to='/login' >Sign in</Link>
              }
            </div>
            <div className="Last_div_menu" onClick={() => setBoxState(!boxState)}>
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
                      <li>
                        {loggedOut ? 
                            <Link to='/signup' >Signup</Link> 
                            : 
                            <p onClick={() => {
                              dispatch(apiCallLogout())
                            }}>
                              Log out
                            </p>
                        }
                      </li>
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

export default Navbar;