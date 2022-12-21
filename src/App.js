import React, { useState } from "react";
import "./index.css";
import { GiPoliceBadge } from "react-icons/gi";
export default function App() {
  const [values, setValues] = useState({
    Name: '',
    email: '',
    Phone: '',
    College: '',
    State: '',
    City:'',
    Password: '',
    confirmpass: '',

    
  });
  const [submitted, setSubmitted] = useState(false);
  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,Name: event.target.value,}
    ));
  };
  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,Password: event.target.value,}
    ));
  };
  const handleemailInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,email: event.target.value,}
    ));
  };
  const handlePhoneInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,Phone: event.target.value,}
    ));
  };
  const handleCollegeInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,College: event.target.value,}
    ));
  };
  const handleStateInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,State: event.target.value,}
    ));
  };
  const handleCityInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,City: event.target.value,}
    ));
  };
  const handleconfirmpassInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,confirmpass: event.target.value,}
    ));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.Name && values.Password ){
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
          id="Name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="Name"
          value={values.Name}
          onChange={handleNameInputChange}
        />
        {submitted && !values.Name ? <span>Please Enter your Name </span> : null}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleemailInputChange}
        />
        {submitted && !values.email ? <span>Please Enter your email </span> : null}

        <input
          id="Phone"
          class="form-field"
          type="text"
          placeholder="Phone"
          name="Phone"
          value={values.Phone}
          onChange={handlePhoneInputChange}
        />
        {submitted && !values.Phone ? <span>Please Enter your Phone </span> : null}

        <input
          id="College"
          class="form-field"
          type="text"
          placeholder="College"
          name="College"
          value={values.College}
          onChange={handleCollegeInputChange}
        />
        {submitted && !values.College ? <span>Please Enter your College </span> : null}

        <input
          id="State"
          class="form-field"
          type="text"
          placeholder="State"
          name="State"
          value={values.State}
          onChange={handleStateInputChange}
        />
        {submitted && !values.State ? <span>Please Enter your State </span> : null}

        <input
          id="City"
          class="form-field"
          type="text"
          placeholder="City"
          name="City"
          value={values.City}
          onChange={handleCityInputChange}
        />
        {submitted && !values.City ? <span>Please Enter your City </span> : null}

        <input
          id="password"
          class="form-field"
          type="text"
          placeholder="Password"
          name="Password"
          value={values.Password}
          onChange={handlePasswordInputChange}
        />
        {submitted && !values.Password ? <span>Please Enter a Password </span> : null}

        <input
          id="confirmpass"
          class="form-field"
          type="text"
          placeholder="confirmpass"
          name="confirmpass"
          value={values.confirmpass}
          onChange={handleconfirmpassInputChange}
        />
        {submitted && !values.confirmpass ? <span>Please Re Enter your password </span> : null}
        
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
