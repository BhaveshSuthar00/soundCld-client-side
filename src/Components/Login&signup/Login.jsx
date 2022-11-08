import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext,useEffect } from "react";
import { ChangeSong } from "../../Contexts/Status";
import { useDispatch}  from 'react-redux'
import { GiCrossedBones } from 'react-icons/gi'
import { Box, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { apiCallLogin } from "../../Redux/Login/Login";
const Login = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {handleStatus2} = useContext(ChangeSong);
  const [formdata, setFormdata] = useState({});
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(apiCallLogin(formdata)).then((res)=> {
      // res === true ?  navigate('/') : navigate('/login');
        navigate('/')
    }).catch((err)=> {
      alert('error while login')
      navigate('/login')
    })
  }
  const handeleChange = (e) => {
    const { id, value } = e.target;
    setFormdata({ ...formdata, [id]: value });
  };
  useEffect(()=>{
    let localPlayer = ['value'];
    localStorage.setItem('playerAble', JSON.stringify(localPlayer));
    handleStatus2();
  },[])
  
  return (
    <Box mt={'auto'} display='flex' h='container.md' bgColor={'gray'}>
      <Box mt={'auto'} mb='auto' margin={'auto'} w={'40%'} boxShadow='lg' bgColor={'white'} padding={4}>
        <Box textAlign={'end'}>
          <Button variant={'ghost'} onClick={() => navigate('/')} _hover={{backgroundColor:"transparent"}}> <GiCrossedBones /> </Button>
        </Box>
        <Box as='form' display={'flex'} flexDir='column' onSubmit={handleSubmit}>
          <Button mt={2} disabled={true} colorScheme={'facebook'}>Continue with Facebook</Button>
          <Button mt={2} disabled={true}>Continue with Google</Button>
          <Button mt={2} mb={2} disabled={true} colorScheme={'blackAlpha'}>Continue with Apple</Button>
          <Text>or</Text>
          <hr className="hr"/>
          <Input onChange={(e)=>{handeleChange(e)}} mt={4} type="email" id="email" placeholder="Your email address" />
          <hr className="hr"/>
          <InputGroup  size={'md'} mt={8} mb={4}>
            <Input onChange={(e)=>{handeleChange(e)}}  id="password" type={toggle ? "text" : "password"} placeholder="Password" />
            <InputRightElement w='4.5rem' mt={'auto'} mb='auto'>
              <Button onClick={handleClick}   size='sm' h='1.75rem'>
                {!toggle ? "Show" : "Hide"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme={'orange'} type='submit'>Continue</Button>
        </Box>
        <Box >
          <Text as={"i"} fontSize='xs'>When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our <a href="https://soundcloud.com/pages/privacy" target={"_blank"}>Privacy Policy</a>.</Text>
        </Box>
        <Box className="footer">
          
          
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
