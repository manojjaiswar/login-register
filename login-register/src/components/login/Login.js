import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ({setLoginUser}) => {
 let history = useHistory()

 const [user, setUser] = useState({
  email: "",
  password: ""
 })

 const handleChange = e => {
  const { name, value } = e.target
  setUser({
   ...user,
   [name]: value
  })
 }

 const login = () => {
  axios.post('http://localhost:9002/login', user)
  .then(res => {
   alert(res.data.message)
   setLoginUser(res.data.user)
   history.push("/")
  })
 }

 return (
  <>
   <h1>Login Page</h1>
   <InputText className='p-inputtext-sm p-mb-2' type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange} /><br />
   <InputText className='p-inputtext-sm' type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange} /><br /><br />
   <Button className='p-button-sm' label='Login' onClick={login}></Button> <span> Or </span>
   <Button className='p-button-sm' label='Register' onClick={()=> history.push('/register')}></Button>
   
  </>
 )
}

export default Login;