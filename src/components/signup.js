import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div>
      <form>
        <h3>Register</h3>

        <div className="form-group">
          <label>Full name</label>
          <input type="text" className="form-control" placeholder="Full name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="Email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group">
          <label>Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile No."
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/sign-in">log in?</Link>
        </p>
      </form>
    </div>
  );
};

export default signup;
