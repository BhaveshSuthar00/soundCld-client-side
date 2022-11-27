import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { GiCrossedBones } from 'react-icons/gi'
import { Box, Button, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react";
import { BaseURL } from "../../constants";
const Signup = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [formdata, setFormdata] = useState({});
  const [toggle, setToggle] = useState(true);
  const handleClick = () => setToggle(!toggle);
  const handeleChange = (e) => {
    const { id, value } = e.target;
    setFormdata({ ...formdata, [id]: value });
  };
  const Goback = () =>{
    navigate('/')
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(formdata.password !== formdata.password2) {
      toast({
        title: "Password is not same as confirm password",
        description: "Please enter the same password and Confirm password",
        status : 'warning',
        isClosable : true,
        duration : 3000
      })
      return;
    }
    axios.post(`${BaseURL}/user/post`,{email : formdata.email, password : formdata.password, name : formdata.name}).then((response) =>{
      toast({
        title : 'Sign up successfully',
        description : "Please login with your email address",
        isClosable : true,
        duration : 3000
      })
      navigate('/login');
    }).catch((err) =>{
      if(err.response.data.message) {
        toast({
          title: err.response.data.message,
          status : err.response.status === 403 ? "warning" : "error",
          isClosable : true,
          duration : 3000
        })
      }
    })
  }
  // useEffect(()=>{
  //   let localPlayer = ['value'];
  //   localStorage.setItem('playerAble', JSON.stringify(localPlayer));
  // },[])
    return (
      <Box mt={'auto'} display='flex' h='container.md' bgColor={'gray'}>
        <Box mt={'auto'} mb='auto' margin={'auto'} w={{base : '24%', lg : '24%', md : '60%', sm : '90%'}} boxShadow='lg' bgColor={'white'} padding={4}>
          <Box textAlign={'end'}>
            <Button variant={'ghost'} onClick={Goback} _hover={{backgroundColor:"transparent"}}> <GiCrossedBones /> </Button>
          </Box>
          <Box as='form' display={'flex'} flexDir='column' onSubmit={handleSubmit}>
            <hr className="hr"/>
            <Input onChange={(e)=>{handeleChange(e)}} mt={4} type="text" id="name" placeholder="Your name" />
            <Input onChange={(e)=>{handeleChange(e)}} mt={4} type="email" id="email" placeholder="Your email address" />
            <hr className="hr"/>
            <InputGroup size={'md'} mt={8} mb={4}>
              <Input onChange={(e)=>{handeleChange(e)}} id="password" autoComplete={"true"} type={toggle ? "text" : "password"} placeholder="Password" />
              <InputRightElement w='4.5rem' mt={'auto'} mb='auto'>
                <Button onClick={handleClick} size='sm' h='1.75rem'  >
                  {!toggle ? "Show" : "Hide"}
                </Button>
              </InputRightElement>
            </InputGroup>
            
            <InputGroup size={'md'} mt={8} mb={4}>
              <Input  id="password2" autoComplete={"true"} onChange={(e) => handeleChange(e)} type={toggle ? "text" : "password"} placeholder="Confirm Password" />
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
