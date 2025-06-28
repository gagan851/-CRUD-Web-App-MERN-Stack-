import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // make sure this is imported
import toast from "react-hot-toast";

const Adduser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setuser] = useState(users);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
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
                  type="button"
                  className="btn btn-outline-secondary mb-2 float-start"
                >
                  <i className="fa-solid fa-backward"></i> Back
                </Link>
                <br />
                <h3 className="mt-4">Add New User</h3>
              </div>

              {/* ✅ Updated form with onSubmit */}
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
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
                    onChange={inputHandler}
                    name="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
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

export default Adduser;
