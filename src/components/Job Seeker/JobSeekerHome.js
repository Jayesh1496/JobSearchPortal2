import React from "react";

export const JobSeekerHome = () => {
  return (
    <>
      <div id="page-content-wrapper">
        <div className="wrapper">
          <h2 class="fs-2 m-0 py-5 px-5">Job Seeker Dashboard</h2>
        </div>

        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="col-md-3">
              <div class="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">View Profile</h3>
                  <a
                    href="ViewJobseekerProfile"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">View Jobs</h3>
                  <a
                    href="ViewAvilableJobs"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">View Applied Jobs</h3>
                  <a
                    href="ViewAllJobs"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">Manage Profile</h3>
                  <a
                    href="ManageProfile"
                    class="btn btn-dark active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">Apply For Jobs</h3>
                  <a
                    href="ApplyForJob"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeekerHome;
