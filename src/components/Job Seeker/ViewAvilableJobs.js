import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import jobproviderservices from "../../services/jobproviderservices";

export const ViewAvilableJobs = () => {

  const navigate = useNavigate();
  const navigateApplyForJob = () => {
    navigate("/ApplyForJob");
  };

  const [job, setJobs] = useState([]);
  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    jobproviderservices
      .getAllJobs()
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <h1 className="text-center mt-5">Posted Jobs</h1><hr></hr>
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
                              <th className="text-dark">Job Titile</th>
                              <th className="text-dark">Salary</th>
                              <th className="text-dark">Job Location</th>
                              <th className="text-dark">Job Category</th>
                              <th className="text-dark">Job Description</th>
                              <th className="text-dark">Total Vacancies</th>
                              <th className="text-dark">Post Date</th>
                              <th className="text-dark">Post Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {job.map((job) => (
                              <tr key={job.id}>
                                <td>{job.jobid}</td>
                                <td>{job.jobTitle}</td>
                                <td>{job.salary}</td>
                                <td>{job.location}</td>
                                <td>{job.jobCategory}</td>
                                <td>{job.jobDescription}</td>
                                <td>{job.totalVacancy}</td>
                                <td>{job.postDate}</td>
                                <td>{job.postStatus}</td>
                                <td>
                                <button
                                  type="button"
                                  className="btn btn-warning btn-sm px-3 ms-3"
                                  onClick={navigateApplyForJob}
                                >
                                  Apply
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


export default ViewAvilableJobs
