import React from "react";
import { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { ChangeSong } from "../../Contexts/Status";
import { GiCrossedBones } from 'react-icons/gi'
import { Box, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
const Signup = () => {
  const navigate = useNavigate();
  const {handleStatus2} = useContext(ChangeSong)
  const [formdata, setFormdata] = useState({});
  const [toggle, setToggle] = useState(true);
  const handleClick = () => setToggle(!toggle);
  const handeleChange = (e) => {
    const { id, value } = e.target;
    
    setFormdata({ ...formdata, [id]: value });
  };
  useEffect(()=>{
    let localPlayer = ['value'];
    localStorage.setItem('playerAble', JSON.stringify(localPlayer));
    handleStatus2();
  },[])
  const Goback = () =>{
    navigate('/')
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://soundcloud-serverside.herokuapp.com/user/post',{email : formdata.email, password : formdata.password, name : formdata.name}).then((response) =>{
      navigate('/login')
    }).catch((err) =>{
      alert('error while signup please try again')
      console.log(err);
    })
  }
    return (
      <Box mt={'auto'} display='flex' h='container.md' bgColor={'gray'}>
        <Box mt={'auto'} mb='auto' margin={'auto'} w={'24%'} boxShadow='lg' bgColor={'white'} padding={4}>
          <Box textAlign={'end'}>
            <Button variant={'ghost'} onClick={() => navigate('/')} _hover={{backgroundColor:"transparent"}}> <GiCrossedBones /> </Button>
          </Box>
          <Box as='form' display={'flex'} flexDir='column' onSubmit={handleSubmit}>
            {/* <Button mt={2} disabled={true} colorScheme={'facebook'}>Continue with Facebook</Button>
            <Button mt={2} disabled={true}>Continue with Google</Button>
            <Button mt={2} mb={2} disabled={true} colorScheme={'blackAlpha'}>Continue with Apple</Button> */}
            <Text>or</Text>
            <hr className="hr"/>
            <Input onChange={(e)=>{handeleChange(e)}} mt={4} type="text" id="name" placeholder="Your name" />
            <Input onChange={(e)=>{handeleChange(e)}} mt={4} type="email" id="email" placeholder="Your email address" />
            <hr className="hr"/>
            <InputGroup  size={'md'}>
              <Input onChange={(e)=>{handeleChange(e)}} mt={8} mb={4} id="password" type={toggle ? "text" : "password"} placeholder="Password" />
              <InputRightElement w='4.5rem' mt={'auto'} mb='auto'>
                <Button onClick={handleClick} size='sm' h='1.75rem'  >
                  {!toggle ? "Show" : "Hide"}
                </Button>
              </InputRightElement>
            </InputGroup>
            
            <InputGroup  size={'md'}>
              <Input mt={8} mb={4} id="password" type={toggle ? "text" : "password"} placeholder="Confirm Password" />
              <InputRightElement w='4.5rem' mt={'auto'} mb='auto'>
                <Button onClick={handleClick} size='sm' h='1.75rem'  >
                  {!toggle ? "Show" : "Hide"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme={'orange'} type='submit'>Sign Up</Button>
          </Box>
          <Box >
            <Text as={"i"} fontSize='xs'>
              I accept the Terms of Use and Privacy Policy
            </Text>
          </Box>
          <Box className="footer">
            
            
          </Box>
        </Box>
      </Box>
    );
};

export default Signup;
