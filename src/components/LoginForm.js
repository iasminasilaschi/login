import React, {useState} from 'react'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({email: "", password: "", role: ""});

  const submitHandlerLogin = e => {
    e.preventDefault();
    Login(details);
  }

  return (
    <div>
      <div className="header">
        <h1>Conference System</h1>
      </div>
      <form onSubmit={submitHandlerLogin}>
          <div className="form-inner">
              <h2>Login</h2>
              {(error != "") ? (
                <div className="error">{error}</div>
              ): ""}
              <div className="form-group">
                  <label htmlFor="username">Username: </label>
                  <input type="name" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}  />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
              </div>
              <input type="submit" value="LOGIN" />
          </div>
      </form>
    </div>
  )
}

export default LoginForm