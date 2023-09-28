import axios from 'axios';

function Login() {

            axios.post('http://localhost:3001/login')
                .then(response => {
                    console.log('you have successfully logged in', response);
                })
                .catch(error => {
                    console.log('an error has occurred', error);
                });

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email</label> <input type="text" name="member_email" /><br/>
                <label>Password</label> <input type="password" name="member_password"/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;