import React,{ useState , useEffect}  from 'react';
import '../Dashboard.css'
const axios = require('axios').default;



const Dashboard = () => {

  

  const [username, setusername] = useState('');
  const [account, setaccount] = useState('');
  const [password, setpassword] = useState('');

   

  const [user, setuser] = useState('');
  const [acc, setacc] = useState('');
  const [pass, setpass] = useState('');

    const addRequest =async()=>{

    try{

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }; 
      
    const result = await axios.post('http://localhost:5000/api/users/account',{ username,account,password},config);
    console.log(result);
    setusername("");
    setaccount("");
    setpassword("");
    }catch(err){
      console.log(err);
    }

    }

  useEffect(()=>{
     
    const id = "62323877db0e853635273312";

    const fetchData = async()=>{
      const result = await axios.get(`http://localhost:5000/api/users/getaccount/${id}`);
      const accountData = await result.data;
      //console.log(accountData.data.account);
      setacc(accountData.data.account);
      setuser(accountData.data.username);
      setpass(accountData.data.password);
      
    }
     fetchData();
  },[]);



  return (
    <div className='dashboard'>
       <div className='left'>
          <h1>User Accounts</h1>
          <div className='accounts'>
            <table>
              <thead>
                <tr> 
                  <th> Sr No.</th>
                  <th> Account</th>
                  <th> Username</th>
                  <th> Password</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                   <td>2</td>
                   <td>{acc}</td>
                   <td>{user}</td>
                   <td>{pass}</td>
                 </tr>
              </tbody>
            </table>
          </div>
       </div>
       <div className='right'>
       <h1>Add New Accounts</h1>
       <div className='new-ac'>
          <input type='text' placeholder='Account name'  onChange={(e)=>{setaccount(e.target.value)}} value={account} />
          <input type='text' placeholder='Username'  onChange={(e)=>{setusername(e.target.value)}} value={username} />
          <input type='password' placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
          <button onClick={addRequest}>Save</button>
       </div>
       </div>
    </div>
  )
}

export default Dashboard;

     
     

                   



