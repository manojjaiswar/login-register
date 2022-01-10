import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Register = () => {
 let history = useHistory()

 const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  reEnterPassword: ""
 })

 const handleChange = e => {
  const { name, value } = e.target
  setUser({
   ...user,
   [name]: value
  })
 }

 const register = () => {
  const { name, email, password, reEnterPassword } = user
  if (name && email && password && (password === reEnterPassword)) {
   axios.post('http://localhost:9002/register', user)
   .then(res => {
    alert(res.data.message)
    history.push('/login')
   })
  } else {
   alert("Invlid Input")
  }

 }

 return (
  <>
   <h1>Register</h1>
   <InputText className='p-inputtext-sm p-mb-2' type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange} /><br />
   <InputText className='p-inputtext-sm p-mb-2' type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange} /><br />
   <InputText className='p-inputtext-sm p-mb-2' type="password" name="password" value={user.password} placeholder='Your Password' onChange={handleChange} /><br />
   <InputText className='p-inputtext-sm p-mb-2' type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} /><br /><br />
   <Button className='p-button-sm' label='Register' onClick={register}></Button>
   <span> Or </span>
   <Button className='p-button-sm' label='Login' onClick={()=> history.push('/login')}></Button>
  </>
 )
}

export default Register;