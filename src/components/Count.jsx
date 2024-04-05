import axios from "axios";
import React, { useEffect, useState } from "react";

function Count({ updateCountPar }) {
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the count of 'add' API calls
    axios
      .get("https://dataneuron-backend-mlfa.onrender.com/add/count")
      .then((response) => setAddCount(response.data.count))
      .catch((error) => console.error("Error fetching add count:", error));

    // Fetch the count of 'update' API calls
    axios
      .get("https://dataneuron-backend-mlfa.onrender.com/update/count")
      .then((response) => setUpdateCount(response.data.count))
      .catch((error) => console.error("Error fetching update count:", error));

    const fetchUsers = async () => {
      const response = await axios.get(
        "https://dataneuron-backend-mlfa.onrender.com/api/v1/user/get"
      ); // Adjust the URL based on your setup
      console.log(response);
      // const data = await response.json();
      console.log(response.data.data);
      setUsers(response.data.data);
    };

    fetchUsers();
  }, [updateCountPar]);

  return (
    <div>
      <h2>IP Counts</h2>
      <div>
        <p>Add Count: {addCount}</p>
        <p>Update Count: {updateCount}</p>
      </div>

      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Count;
