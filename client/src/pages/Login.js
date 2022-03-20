import React,{ useState}  from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;



const Login = () => {


      
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
  const navigate = useNavigate();

  const LoginRequest = async() =>{

    try{
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }; 
      
    const result = await axios.post('http://localhost:5000/api/users/login',{ username,password},config);
    console.log(result);
    navigate('/dashboard');
    
    }catch(err){
      console.log(err);
    }
  
  }

  return (
    <div><h2> Login </h2>
         <input type="text" placeholder='Username' onChange={(e)=>{setusername(e.target.value)}} />
         <input type="text" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}} />
         <button type='submit' onClick={LoginRequest} >Login</button>
    </div>
  )
}

export default Login;