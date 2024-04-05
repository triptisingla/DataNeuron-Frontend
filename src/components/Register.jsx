import React, { useState } from "react";

import "../App.css";
import axios from "axios";
import toast from "react-hot-toast";

function Register({ incrementUpdateCount }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://dataneuron-backend-mlfa.onrender.com/api/v1/user/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.data);
      incrementUpdateCount();
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <form className="h-full p-2">
      <h1>REGISTER FORM</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <b> Name </b>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          <b> Email address</b>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="johndoe@gmail.com"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          <b>Password</b>
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        onClick={handleRegister}
        type="submit"
        className="btn btn-primary"
      >
        Register
      </button>
    </form>
  );
}

export default Register;
