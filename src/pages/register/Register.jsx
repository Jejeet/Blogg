import "./register.css"

export default function Login() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form  className="registerForm">
        <label >Username</label>
            <input className="registerInput"type="text" placeholder="enter your username..." />
            <label >Email</label>
            <input className="registerInput"type="text" placeholder="enter your email..." />
            <label >password</label>
            <input  className="registerInput" type="password" placeholder="your password" />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}