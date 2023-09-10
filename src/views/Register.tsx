export default function Register() {
  return (
    <div className="register-page">
    <div className="register-container">
      <div className=""></div>
      <form className="flex flex-col flow">
        <p className="fw-700 mb-4">Register your account</p>
        <input className="" type="text" placeholder="Fullname" />
        <input className="" type="text" placeholder="Handle" />
        <input className="" type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password"/>
        <button button-type='primary'>Sign in</button>
        <a href="/" className="fw-700 text-small">Already have an account?</a>
      </form>
    </div>
  </div>
  )
}
