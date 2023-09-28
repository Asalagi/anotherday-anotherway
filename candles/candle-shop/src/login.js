import axios from 'axios';
import { useState } from 'react';

function Login() {
      const handleSubmit = e => {
        e.preventDefault()
        
        axios.post("http://localhost:3001/login", { member_email, member_password })
          .then(response => {
            console.log(response)
          });
      }
    
      const [member_email, setMember_Email] = useState('');
      const [member_password, setMember_Password] = useState('');

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label> <input type="text" name="member_email" value={member_email} onChange={e => setMember_Email(e.target.value)} /><br/>
                <label>Password</label> <input type="password" name="member_password" value={member_password} onChange={e => setMember_Password(e.target.value)}/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;