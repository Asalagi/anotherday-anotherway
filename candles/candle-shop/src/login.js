function Login() {
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