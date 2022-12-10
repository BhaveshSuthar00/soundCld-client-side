import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch}  from 'react-redux'
import { GiCrossedBones } from 'react-icons/gi'
import { Box, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { apiCallLogin } from "../../Redux/Login/Login";
const Login = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({});
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(apiCallLogin(formdata)).then((res)=> {
        navigate('/');
    }).catch((err)=> {
      alert('error while login')
      navigate('/login')
    })
  }
  const handeleChange = (e) => {
    const { id, value } = e.target;
    setFormdata({ ...formdata, [id]: value });
  };
  return (
    <Box mt={'auto'} display='flex' h={window.innerHeight} bgColor={'gray'}>
      <Box mt={'auto'} mb='auto' margin={'auto'} w={{base : '30%', lg : '30%', md : '60%', sm : '90%'}} boxShadow='lg' bgColor={'white'} padding={4}>
        <Box textAlign={'end'}>
          <Button variant={'ghost'} onClick={() => navigate('/')} _focus={{outline : 0}} _hover={{backgroundColor:"transparent"}}> <GiCrossedBones /> </Button>
        </Box>
        <Box as='form' display={'flex'} flexDir='column' onSubmit={handleSubmit}>
          <Button mt={2} disabled={true} colorScheme={'facebook'}>Continue with Facebook</Button>
          <Button mt={2} disabled={true}>Continue with Google</Button>
          <Button mt={2} mb={2} disabled={true} colorScheme={'blackAlpha'}>Continue with Apple</Button>
          <Text m={3} ml={'auto'} mr={'auto'} >or</Text>
          {/* <hr className="hr"/> */}
          <Input onChange={(e)=>{handeleChange(e)}} mt={4} type="email" id="email" placeholder="Your email address" />
          {/* <hr className="hr"/> */}
          <InputGroup  size={'md'} mt={8} mb={4}>
            <Input onChange={(e)=>{handeleChange(e)}} autoComplete={"true"}  id="password" type={toggle ? "text" : "password"} placeholder="Password" />
            <InputRightElement w='4.5rem' mt={'auto'} mb='auto'>
              <Button onClick={handleClick}   size='sm' h='1.75rem'>
                {!toggle ? "Show" : "Hide"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme={'orange'} type='submit'>Continue</Button>
        </Box>
        <Box mt={4}>
          <Text as={"i"} fontSize='xs'>When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our <a href="https://soundcloud.com/pages/privacy" target={"_blank"} rel="noreferrer">Privacy Policy</a>.</Text>
        </Box>
        <Box className="footer">
          
          
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
