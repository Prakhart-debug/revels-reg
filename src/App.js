import React, { useState } from "react";
import "./index.css";
import { GiPoliceBadge } from "react-icons/gi";
export default function App() {
  const [values, setValues] = useState({
    Username: '',
    Password: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const handleUsernameInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,Username: event.target.value,}
    ));
  };
  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,Password: event.target.value,}
    ));
  };
  
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,email: event.target.value,}
  ));
  
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.Username && values.Password && values.email){
      setValid(true);
    }
    setSubmitted(true);
  };
  const [valid, setValid] = useState(false);
  return (
    <div class="form-container">
      <h1> Revels '23</h1>
      <h2> <i>Login </i></h2>

      <form class="register-form" onSubmit={handleSubmit}>
      {submitted && valid? <div class='success-message'>Success! Thank you for registering</div> : null}

        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Username"
          name="Username"
          value={values.Username}
          onChange={handleUsernameInputChange}
        />
        {submitted && !values.Username ? <span>Please Enter your Username </span> : null}

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Password"
          name="Password"
          value={values.Password}
          onChange={handlePasswordInputChange}
        />
        {submitted && !values.Password ? <span>Please Enter a Password </span> : null}
        
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email ? <span>Please Enter a First Name </span> : null}
        <a href="#">Forgot your password?</a>
        <label>
          <br></br>
        <input id="remember" type="checkbox" />
        Remember me
      </label>
        <button id = "submit-button" class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
