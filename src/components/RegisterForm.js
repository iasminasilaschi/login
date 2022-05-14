import React, {useState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function RegisterForm({Register, error}) {
  const [details, setDetails] = useState({forename: "", surname: "", email: "", username: "", password: "", role: ""});

  const submitHandlerRegister = e => {
    e.preventDefault();
    Register(details);
  }

  const roles = ["Chair", "Author", "Reviewer"];

  return (
    <div>
      <div className="header">
        <h1>Conference System</h1>
      </div>
      <form onSubmit={submitHandlerRegister}>
          <div className="form-inner">
              <h2>Register</h2>
              {(error != "") ? (
                <div className="error">{error}</div>
              ): ""}
              <div className="form-group">
                  <label htmlFor="forename">Forename: </label>
                  <input type="text" name="forename" id="forename" onChange={e => setDetails({...details, forename: e.target.value})} value={details.forename} />
              </div>
              <div className="form-group">
                  <label htmlFor="surname">Surame: </label>
                  <input type="text" name="surname" id="surname" onChange={e => setDetails({...details, surname: e.target.value})} value={details.surname} />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}  />
              </div>
              <div className="form-group">
                  <label htmlFor="username">Username: </label>
                  <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role: </label>
                <Dropdown name="role" id="role" options={roles} placeholder="Select a role" onChange={e => setDetails({...details, role: e.value})} value={details.role} />
              </div>
              <input type="submit" value="REGISTER" />
          </div>
      </form>
    </div>
  )
}

export default RegisterForm