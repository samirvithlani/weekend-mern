import axios from "axios";
import React, { useEffect } from "react";

export const NodeApi = () => {
  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:3001/users/user");
    console.log(res.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>Node API</h1>
    </div>
  );
};
