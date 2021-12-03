import React from "react";

const forget = () => {
  return (
    <div>
      <form>
        <h3>Reset Password</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default forget;
