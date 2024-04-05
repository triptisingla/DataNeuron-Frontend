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
        "https://dataneuronf.netlify.app/api/v1/user/update",
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
      <div className="mb-3">
        <label htmlFor="nameu" className="form-label">
          <b> Name </b>
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
      </div>
      <div className="mb-3">
        <label htmlFor="passwordu" className="form-label">
          <b>Password</b>
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
