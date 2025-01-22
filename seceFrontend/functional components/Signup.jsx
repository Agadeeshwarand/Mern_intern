/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Corrected the `e` reference by including it as a parameter
    props.onLogin(); // Assumes `onLogin` is passed as a prop and correctly calls it
    navigate("/home"); // Navigates to the home page after successful signup
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          Email: <input type="email" placeholder="Enter your email" required />
        </div>
        <div>
          Password: <input type="password" placeholder="Enter your password" required />
        </div>
        <div>
          Confirm Password: <input type="password" placeholder="Confirm your password" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div>
        Already have an account? <Link to="/Login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
