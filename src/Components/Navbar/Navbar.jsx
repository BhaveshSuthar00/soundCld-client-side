import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { ChangeSong } from "../../Contexts/Status";
import { useSelector, useDispatch } from 'react-redux'
import { apiCallLogout } from '../../Redux/Login/Action';
import { 
  Box,
  Button,
  Flex, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text,
} from '@chakra-ui/react'
const Navbar = () => {
  const history = useNavigate();
  const { user, loggedOut } = useSelector((store)=> store.login);
  const dispatch = useDispatch();
  const {  statusChange, handleUserName } = useContext(ChangeSong)
  const [searchArtist, setSearchArtist] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
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
            <form onSubmit={(e) => { handleSearchSubmit(e) }} style={{display : 'flex', width: '40%'}}>
              <Input type="text" placeholder="Search" color='black' bgColor='white' w='100%' onChange={(e) => { setSearchArtist(e.target.value) }} />
              <Button type="submit" display='inline-block' variant='ghost'
                bgColor='black'
                color='white'
                outline='none'
                colorScheme='black'
                border='none'> 
                <BiSearchAlt />
              </Button>
            </form>
          <Spacer />
          <Flex color='white' align='center' fontSize='lg'  >
            <Text mr={5}>
              Upload
            </Text>
            <Box mr={5}>
              {user.userName ? <p>{user.userName}</p> :
                <Link to='/login' >Sign in</Link>
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
                    <Link to='/signup'>Sign up</Link> 
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