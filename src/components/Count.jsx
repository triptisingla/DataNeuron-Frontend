import axios from "axios";
import React, { useEffect, useState } from "react";

function Count({ updateCount1 }) {
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

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
  }, [updateCount1]);

  return (
    <div>
      <h2>IP Counts</h2>
      <div>
        <p>Add Count: {addCount}</p>
        <p>Update Count: {updateCount}</p>
      </div>
    </div>
  );
}

export default Count;
