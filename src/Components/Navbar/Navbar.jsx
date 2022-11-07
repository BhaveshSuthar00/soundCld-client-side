import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link, unstable_HistoryRouter, useHistory, matchPath } from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { ChangeSong } from "../../Contexts/Status";
import { useSelector, useDispatch } from 'react-redux'
import { 
  Box,
  Button,
  Flex, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text,
} from '@chakra-ui/react'
import { apiCallLogout } from '../../Redux/Login/Login';
import { setVisible } from '../../Redux/Player/Player';
const Navbar = () => {
  const history = useNavigate();
  const { visible } = useSelector((store)=> store.player);
  const { user, loggedOut } = useSelector((store)=> store.login);
  console.log(window.location.pathname);
  const dispatch = useDispatch();
  const { statusChange, handleUserName } = useContext(ChangeSong)
  const [searchArtist, setSearchArtist] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // let localPlayer = JSON.parse(localStorage.getItem("playerAble")) || [];
    // localPlayer.pop()
    // localStorage.setItem('playerAble', JSON.stringify(localPlayer))
    // if(!visible){
    //   dispatch(setVisible(true));
    // }
    history(`/searchpage/everything?q=${searchArtist}`)
  };
  useEffect(() => {
    handleUserName();
  }, [statusChange])
  return (
    <>
      <Flex bgColor='black' p={4} 
      color='white' position='sticky' 
      top={0} zIndex={5} 
      justify='space-between' w='full' >
          <Flex color='white' align='center' display='flex' fontSize='lg' justify='space-between'   >
              <Box ml={5}>
                <BsFillPeaceFill />
              </Box>
              <Text ml={5}>
                <Link to="/">Home</Link>
              </Text>
              <Text ml={5}>
                Stream
              </Text>
              <Text ml={5}>
                <Link to="/library">Library</Link>
              </Text>
          </Flex>
          <Spacer />
            <Box as={"form"} onSubmit={(e) => { handleSearchSubmit(e) }} style={{display : 'flex', width: '40%'}}>
              <Input type="text" placeholder="Search" color='black' bgColor='white' w='100%' onChange={(e) => { setSearchArtist(e.target.value) }} />
              <Button disabled={window.location.pathname === '/login' || window.location.pathname === '/signup'} type="submit" display='inline-block' variant='ghost'
                bgColor='black'
                color='white'
                outline='none'
                colorScheme='black'
                border='none'> 
                <BiSearchAlt />
              </Button>
            </Box>
          <Spacer />
          <Flex color='white' align='center' fontSize='lg'  >
            <Text mr={5}>
              Upload
            </Text>
            <Box mr={5}>
              {user.userName ? <p>{user.userName}</p> :
                <Link to='/login' onClick={() => dispatch(setVisible(false))}>Sign in</Link>
              }
            </Box>
            <Menu mr={5}>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<FiMoreHorizontal />}
                variant='ghost'
                bgColor='black'
                color='white'
                outline='none'
                colorScheme='black'
                border='none'
              />
              <MenuList
                mt={2}
                color='black'
              >
              <MenuItem>About us</MenuItem>
              <MenuItem>Legal</MenuItem>
              <MenuItem>Copyright</MenuItem>
              <MenuItem>For creators</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>
                {
                  loggedOut ? 
                    <Link to='/signup' onClick={() => dispatch(setVisible(false))}>Sign up</Link> 
                  : null
                } 
              </MenuItem>
              <MenuItem>
                {
                  !loggedOut ? <Text onClick={() => {
                    dispatch(apiCallLogout())
                  }}>
                    Log out
                  </Text>
                  : null
                }
              </MenuItem>
            </MenuList>
            </Menu>
          </Flex>
      </Flex>
    </>
  )
}

export default Navbar;