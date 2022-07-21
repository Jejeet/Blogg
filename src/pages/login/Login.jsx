import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form  className="loginForm">
            <label >Email</label>
            <input className="loginInput"type="text" placeholder="enter your email..." />
            <label >password</label>
            <input  className="loginInput" type="password" placeholder="your password" />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}
