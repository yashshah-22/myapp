import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <Container>
    <Inner>
       <Logo>
        <img src="https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2023-03-07T19%3A05%3A30.302Z-logo%20%E2%80%93%201.jpg" alt="" />
        </Logo>
        <Title><h2>VoteNation</h2></Title>
        <Box></Box>
        <RightContainer>
        <LoginButton onClick={()=>navigate('/login')}>
          Login
        </LoginButton>
        <SignupButton  onClick={()=>navigate('/signup')}>
           Signup
        </SignupButton>
        </RightContainer>
    </Inner>
    </Container>
  )
}

const Container=styled.div`
 width: 100%;
 height: 70px;
  background-color: #000000;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
`;
const Inner=styled.div`
 width: 100%;
  display: flex;
  align-items: center;

`;
const Logo=styled.div`
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;
const Title=styled.div`
margin-left: 10px;
h2{
    color:white;
}
`;
const Box=styled.div`
flex:0.9;
`;
const RightContainer=styled.div`
margin-left: 30px;
display: flex;
width: 200px;
align-items: center;
height: 100%;
`;
const LoginButton=styled.button`
height: 100%;
 margin: 5px;
 border-radius: 5px;
 background-color: #fff;
 height: 30px;
 flex: 0.5;

 &:hover{
    background-color: #B9E9FC;
 }
`;
const SignupButton=styled.button`
margin: 10px;
background-color: #fff;
border-radius: 5px;
height: 30px;
flex: 0.5;

&:hover{
    background-color:#B9E9FC;
}
`;
export default Navbar
