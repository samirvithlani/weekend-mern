import axios from "axios";
import React, { useState } from "react";
import { set } from "react-hook-form";
import { MyLoader } from "../components/MyLoader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [singleUser, setsingleUser] = useState({});
  const handleClose = () => setshow(false);

  const getApiCall = async () => {
    //then catch -- async await
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log("axios response...", res); //axios response object
    console.log("axios response data...", res.data); //axios response data
    console.log("axios response data name...", res.data.message); //axios response data name
    console.log(res.data.data);
    setusers(res.data.data);
    setisLoading(false);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    //console.log(res.status)
    if (res.status === 204) {
      //alert("User Deleted Successfully");
      toast.success(`User Deleted Successfully..`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      getApiCall();
    }
  };

  const getUserDetail = async (id) => {
    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    console.log("axios response...", res); //axios response object
    setsingleUser(res.data.data);

    setshow(true);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      {/* {
            isLoading && <h1>Loading...</h1>
        } */}
      {isLoading && <MyLoader />}
      <h1 style={{ textAlign: "center" }}>API DEMO 1</h1>
      <button
        onClick={() => {
          getApiCall();
        }}
      >
        GET API CALL
      </button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      getUserDetail(user._id);
                    }}
                    className="btn btn-warning"
                    style={{ marginLeft: "2px" }}
                  >
                    DETAIL
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: {singleUser?.email}</p>
          <p>Age: {singleUser?.age}</p>
          <p>Status: {singleUser?.isActive ? "Active" : "Not Active"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
