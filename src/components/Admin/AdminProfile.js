import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import adminservices from "../../services/adminservices";

export const AdminProfile = () => {
  const navigate = useNavigate();

  // const navigateDeleteAdmin = () => {
  //   navigate("/DeleteAdmin");
  // };
  const [admin, setAdmins] = useState([]);
  useEffect(() => {
    getAllAdmins();
  }, []);

  const navigateUpdateAdmin = (adminid) => {
    navigate("/UpdateAdmin", { state: { id: adminid } });
  };

  const getAllAdmins = () => {
    adminservices
      .getAllAdmins()
      .then((response) => {
        setAdmins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const delAdmin = (adminid) => {
    adminservices
      .deleteAdmin(adminid)
      .then((response) => {
        getAllAdmins();
        console.log("Getting");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };
  // useEffect(() => {
  //   fetch("http://localhost:9009/admin/getalladmin")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setAdmins(result);
  //     });
  // }, []);
  return (
    <>
      <h1 className="text-center mt-5">Admin List</h1>
      <hr></hr>
      <div class="row">
        <div class="col text-center">
          <a
            href="AdminRegisteration"
            className="col-md-1 ms-3 mb-3 text-center btn btn-secondary"
          >
            Add Admin
          </a>
        </div>
      </div>
      <section className="intro">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card shadow-2-strong">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th className="text-dark">Job Id</th>
                            <th className="text-dark">User Name</th>
                            <th className="text-dark">Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          {admin.map((admin) => (
                            <tr key={admin.adminid}>
                              <td>{admin.adminid}</td>
                              <td>{admin.username}</td>
                              <td>{admin.password}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning btn-sm px-3 ms-3"
                                  onClick={() =>
                                    navigateUpdateAdmin(admin.adminid)
                                  }
                                >
                                  Update
                                  <i className="fas fa-times"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3"
                                  onClick={() => delAdmin(admin.adminid)}
                                >
                                  Delete
                                  <i className="fas fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProfile;
