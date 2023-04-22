import React, { useState } from 'react'
import styled from 'styled-components'
import InitialNavbar from './InitialNavbar'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login data to server
      const response = await axios.post('http://localhost:3001/users/login', { email, password });
      alert(response.data);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
    <InitialNavbar/>
    <Container>
      <Logo>
        <img src="https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2023-03-07T18%3A46%3A01.376Z-ps1%20%E2%80%93%201-compressed.jpg" alt="" />
      </Logo>
      <FormContainer>
          <h3>Sign In</h3>
          <InputContainer>
          <p>Email</p>
          <input type="email" placeholder='example@example.com' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </InputContainer>
          <InputContainer>
          <p>Password</p>
          <input type="password" placeholder='*********' onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </InputContainer>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
      </FormContainer>
    </Container>
    </>
  )
}

const Container= styled.div`
width: 40%;
min-width:450px;
height: fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
const Logo=styled.div`
  width: 120px;
  margin-bottom: 20px;
  img{
    width: 100%;

  }
`;

const FormContainer=styled.div`
 border: 1px solid lightgrey;
 width: 55%;
 height: 400px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 15px;

 h3{
  font-size: 28px;
  font-weight:400;
  line-height: 33px;
  align-self:flex-start;
  margin-bottom:10px ;
 }
`;

const InputContainer=styled.div`
width: 100%;
padding:10px;

p{
  font-size: 14px;
  font-weight: 600;
}

input{
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin-top: 5px;
  
  &:hover{
    border: 1px solid orange;
  }
}
`;

const LoginButton=styled.button`
width: 70%;
height: 35px;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 10px;
margin-top: 10px;
`;

export default Login
