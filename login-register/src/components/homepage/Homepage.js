import React from 'react'
import { Button } from 'primereact/button';
const Homepage = ({setLoginUser}) => {
 return (
  <div>
   <h1>Hello Home Page</h1>
   <Button label="Logout" onClick={() => setLoginUser({})}></Button>
  </div>
 )
}

export default Homepage;