import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import { 
  Box,
  Button,
  Flex, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text,
} from '@chakra-ui/react'
import { apiCallLogout } from '../../Redux/Login/Login';
import { setLogSign } from '../../Redux/Player/Player';
const Navbar = () => {
  const history = useNavigate();
  const { user, loggedOut } = useSelector((store)=> store.login);
  const dispatch = useDispatch();
  const [searchArtist, setSearchArtist] = useState('');
  const handleSongPlaylist = (data) => {
    history('/playlist/' + data);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history(`/searchpage/everything?q=${searchArtist}`)
  };
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
              {
                !loggedOut && (
                  <Text ml={5} cursor={"pointer"} onClick={() => handleSongPlaylist('likedSongs')}>
                    Liked
                  </Text>
                )
              }
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
              {user.userName ? <p>{ user.userName }</p> :
                <Link to='/login' onClick={() => dispatch(setLogSign(true))}>Sign in</Link>
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
                    <Link to='/signup' onClick={() => dispatch(setLogSign(true))}>Sign up</Link> 
                  : null
                } 
              </MenuItem>
              <MenuItem>
                {
                  !loggedOut ? <Text onClick={() => {
                    dispatch(apiCallLogout())
                    history('/')
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