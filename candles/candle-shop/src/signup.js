import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp(){
    const nav = useNavigate();

    const [member, setMember] = useState({
        member_name: '',
        member_email: '',
        member_password: '',
    })

    const handleChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMember = {
            member_name: member.member_name,
            member_email: member.member_email,
            member_password: member.member_password
        }

        axios.post('http://localhost:3001/members', newMember)
            .then(response => {
                nav('/login');
                console.log('you have successfully signed up', response);
            })
            .catch(error => {
                console.log('an error has occurred', error);
            });
    }

    return (
        <div>
            <h1>Become A Member</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><input type="text" name="member_name" value={member.member_name} onChange={handleChange}/><br/>
                <label>Email</label><input type="text" name="member_email" value={member.member_email} onChange={handleChange}/><br/>
                <label>Password</label><input type="password" name="member_password" value={member.member_password} onChange={handleChange}/><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;