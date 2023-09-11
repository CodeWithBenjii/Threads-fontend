import { Link } from "react-router-dom";
import Register from "./Register";

export default function Login() {
  return (
    <div className="login-page">
    <div className="login-container">
      <form className="flex flex-col flow">
        <p className="fw-700 mb-4">Sign in to your account</p>
        <input className="border-error" type="text" placeholder="john.doe@gmail.com" />
        <span className="input-error text-small">Invalid email</span>
        <input type="password" placeholder="***********"/>
        <button button-type='primary'>Sign in</button>
        <Link to={"/register"} className="fw-700 text-small">Need an account?</Link>
      </form>
    </div>
  </div>
  )
}
