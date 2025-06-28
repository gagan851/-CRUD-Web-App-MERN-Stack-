import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setuser] = useState(users);
  const { id } = useParams();
  const navigate = useNavigate();

  // Get existing user data
  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/user/${id}`);
      setuser(res.data);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((response) => {
        toast.success("User updated successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update user");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <div className="text-center mb-4">
                <Link
                  to="/"
                  className="btn btn-outline-secondary mb-2 float-start"
                >
                  <i className="fa-solid fa-backward"></i> Back
                </Link>
                <br />
                <h3 className="mt-4">Update User</h3>
              </div>

              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={user.name}
                    onChange={inputHandler}
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    onChange={inputHandler}
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={user.address}
                    onChange={inputHandler}
                    name="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
