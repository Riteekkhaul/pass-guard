import React,{ useState}  from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;


const Register = () => {

      
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const navigate = useNavigate();

  const registerRequest = async() =>{

    try{
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }; 
      
    const result = await axios.post('http://localhost:5000/api/users/register',{ username,email,password},config);
    console.log(result);
    navigate('/login');
    
    }catch(err){
      console.log(err);
    }
  
  }

  return (
    <div><h2> Register  </h2>
        <input type="text" placeholder='Username' onChange={(e)=>{setusername(e.target.value)}} />
      <input type="email" placeholder='email' onChange={(e)=>{setemail(e.target.value)}} />
      <input type="text" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}} />
      <button type='submit' onClick={registerRequest} >Register</button>
    </div>
  )
}

export default Register
