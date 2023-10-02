import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [member, setMember] = useState({
    member_email: '',
    member_password: '',
  });

  const handleChange = (e) => {
    setMember(prev => ({...prev, [e.target.name]: e.target.value}))
  };
  const handleSubmit = e => {
    e.preventDefault()
    
    axios.post("http://localhost:3001/login", member)
      .then(response => {
        console.log(response, member)
      });
  }
  
  return (
      <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              <label>Email</label> <input type="text" name="member_email" value={member.member_email} onChange={handleChange} /><br/>
              <label>Password</label> <input type="password" name="member_password" value={member.member_password} onChange={handleChange}/><br/>
              <button type="submit">Login</button>
          </form>
      </div>
  )
}

export default Login;