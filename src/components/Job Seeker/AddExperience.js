import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddExperience = () => {
  const [companyname, setCompanyName] = useState("");
  const [companysector, setCompanySector] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [location, setJobLocation] = useState("");
  const [duration, setJobDuration] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const student = {
      companyname,
      companysector,
      jobtitle,
      location,
      duration,
    };
    if (companyname.length === 0) {
      toast.error("Please Enter Company Name");
    } else if (companysector.length === 0) {
      toast.error("Please Enter Company Sector");
    } else if (jobtitle.length === 0) {
      toast.error("Please Enter Job Ttile");
    } else if (location.length === 0) {
      toast.error("Please Enter Job Loaction");
    } else if (duration.length === 0) {
      toast.error("Please Enter Job Duration");
    } else {
      fetch("http://localhost:9009/jobseeker/addexp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        toast.success("Experience Details Added Successfully !");
        navigate("/JobSeekerHome");
      });
    }
  };
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
          <h2 className="text-uppercase text-center">Add Experience Details</h2>
          <div className="row">
            <div className="mb-3">
              <label>Company Name </label>
              <input
                type="text"
                className="input-field"
                value={companyname}
                onChange={(e) => setCompanyName(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Company Sector</label>
              <input
                type="text"
                className="input-field"
                value={companysector}
                onChange={(e) => setCompanySector(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Job Title</label>
              <input
                type="text"
                className="input-field"
                value={jobtitle}
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Job Loaction</label>
            <input
              type="text"
              className="input-field"
              value={location}
              onChange={(e) => setJobLocation(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Duaration in Months</label>
            <input
              type="text"
              className="input-field"
              value={duration}
              onChange={(e) => setJobDuration(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Add"
              className="register"
              name="register"
              onClick={handleClick}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddExperience;
