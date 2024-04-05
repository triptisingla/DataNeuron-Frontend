import React, { useState } from "react";

import "../App.css";
import axios from "axios";
import toast from "react-hot-toast";

function Update({ incrementUpdateCount }) {
  const [emailUpdate, setEmailUpdate] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [passwordUpdate, setPasswordUpdate] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "https://dataneuron-backend-mlfa.onrender.com/api/v1/user/update",
        { name: nameUpdate, email: emailUpdate, password: passwordUpdate },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.data);
      incrementUpdateCount();
      setNameUpdate("");
      setEmailUpdate("");
      setPasswordUpdate("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <form className="h-full p-2">
      <h1>UPDATE FORM</h1>

      <div className="mb-3">
        <label htmlFor="emailu" className="form-label">
          <b> Email address</b>
        </label>
        <input
          type="email"
          className="form-control"
          id="emailu"
          aria-describedby="emailHelp"
          value={emailUpdate}
          onChange={(e) => setEmailUpdate(e.target.value)}
          placeholder="johndoe@gmail.com"
        />
        <span className="text-primary">Please provide the email address you want to update for.</span>
        <p className="text-danger">Email Address cannot be updated.</p>
      </div>
      <div className="mb-3">
        <label htmlFor="nameu" className="form-label">
          <b> New Name </b>
        </label>
        <input
          type="text"
          className="form-control"
          id="nameu"
          value={nameUpdate}
          onChange={(e) => setNameUpdate(e.target.value)}
          placeholder="John Doe"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordu" className="form-label">
          <b>New Password</b>
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordu"
          value={passwordUpdate}
          onChange={(e) => setPasswordUpdate(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={handleUpdate} type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
}

export default Update;
