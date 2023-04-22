import React, { useState } from 'react'
import styled from 'styled-components';
import InitialNavbar from './InitialNavbar'
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno,setPhoneno]=useState("");
  const [aadharno,setAadharno]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [state,setState]=useState("");
  
  const handleSignUp = (e)=>{
     e.preventDefault();
     axios.post('http://localhost:3001/users/signup',{name,email,password,phoneno,aadharno,age,gender,state}).then(()=>{
      setName("");
      setEmail("");
      setPassword("");
      setPhoneno("");
      setAadharno("")
      setAge(0);
      setGender("");
      setState("");
    }).catch((error)=>alert(error.message));
  }
  return (
    <>
    <InitialNavbar/>
   <Container>
  
    <FormContainer>
          <h3>Sign Up</h3>
          <InputContainer>
          <p>Name</p>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
          </InputContainer>
          <InputContainer>
          <p>Email</p>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </InputContainer>
          <InputContainer>
          <p>Phone Number</p>
          <input type="text" onChange={(e)=>setPhoneno(e.target.value)} value={phoneno}/>
          </InputContainer>
          <InputContainer>
          <p>Aadhar No</p>
          <input type="text" onChange={(e)=>setAadharno(e.target.value)} value={aadharno}/>
          </InputContainer>
          <InputContainer>
          <p>Password</p>
          <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </InputContainer>
          <InputContainer>
          <p>Age</p>
          <input type="text" onChange={(e)=>setAge(e.target.value)} value={age}/>
          </InputContainer>
          <InputContainer>
          <p>State</p>
          <input type="text" onChange={(e)=>setState(e.target.value)} value={state}/>
          </InputContainer>
          <InputContainer>
          <p>Gender</p>
          <select onChange={(e)=>setGender(e.target.value)} value={gender}>
            <option >Select</option>
           <option value={'Male'}>Male</option>
           <option value={'Female'}>Female</option>
           <option value={'Others'}>Others</option>
           </select> 
          </InputContainer>
          <SignupButton onClick={handleSignUp}>Create Account</SignupButton>
      </FormContainer>
   </Container>
   </>
  )
}

const Container=styled.div`
width: 40%;
height: fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`;

const FormContainer=styled.div`
 border: 1px solid lightgrey;
 width: 65%;
 height: fit-content;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 15px;
 margin-top:20px;
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
p{
  font-size: 14px;
  font-weight: 600;
  margin-top: 0px;
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

select{
  width: 100px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
`;
const SignupButton=styled.button`
 width: 100%;
 height: 35px;
 font-size: 12px;
 margin: 10px;
 margin-bottom:;
 padding: 5px;

 &:hover{
  background-color: #dfdfdf;
  border: 1px solid gray;

 }
`;

export default Signup
