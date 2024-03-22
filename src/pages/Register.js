import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var response = await axios.post("/api/v1/auth/register", {
        username,
        email,
        password,
      });
      console.log(response);
      if (response.request.status === 201) {
        toast.success("User is successfully registered");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      if (err.response.request.status === 409) {
        toast.error(err.response.data.msg);
      } else if (err.response.request.status === 400) {
        toast.error(err.response.data.msg);
      } else {
        toast.error(err.response.data.msg);
      }
      console.log(err);
    }
  };

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h3 className="signup">Sign Up</h3>
        <input
          type="text"
          name="username"
          autoComplete="off"
          required
          placeholder="Enter UserName"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          autoComplete="off"
          required
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          required
          name="password"
          autoComplete="off"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="Submit">Sign Up</button>
        <p>
          <span>Already have an Account</span>
          <Link to="/login">Please Log In</Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
