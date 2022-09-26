import axios from "axios";
import { toast } from "react-toastify";


export const DeleteJobProvider = ({ jobprovider }) => {
  const deleteJobProvider = (id) => {
    axios
      .delete("http://localhost:9009/jobprovider/delete?jobproviderid=1")
      .then(
        (response) => {
          toast.success("Delete successfully !");
        },
        (error) => {
          toast.error("Deletion Failed!");
        }
      );
  };

  return (
    <>
      <h1 className="text-center mt-5">Job Providers</h1>
      <hr></hr>
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
                            <th className="text-dark">Job Provider Id</th>
                            <th className="text-dark">First Name</th>
                            <th className="text-dark">Middle Name</th>
                            <th className="text-dark">Last Name</th>
                            <th className="text-dark">Company Name</th>
                            <th className="text-dark">Mobile Number</th>
                            <th className="text-dark">Email Id</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobprovider.map((jobprovider) => (
                            <tr key={jobprovider.id}>
                              <td>{jobprovider.jobproviderid}</td>
                              <td>{jobprovider.fname}</td>
                              <td>{jobprovider.mname}</td>
                              <td>{jobprovider.lname}</td>
                              <td>{jobprovider.companyname}</td>
                              <td>{jobprovider.mobileno}</td>
                              <td>{jobprovider.emailid}</td>

                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3"
                                  onClick={deleteJobProvider}
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

export default DeleteJobProvider;
