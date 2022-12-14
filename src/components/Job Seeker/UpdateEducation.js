import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobseekerservices from "../../services/jodseekerservices";

export const UpdateEducation = () => {
  const [educationid, setEducationid]= useState("");
  const [educationtype, setEducationtype] = useState("");
  const [sscpercent, setSscpercent] = useState("");
  const [hscpercent, setHscpercent] = useState("");
  const [diplomapercent, setDiplomapercent] = useState("");
  const [degreepercent, setDegreepercent] = useState("");
  const [masterspercent, setMasterspercent] = useState("");
  const [sscyear, setSscyear] = useState("");
  const [hscyear, setHscyear] = useState("");
  const [diplomayear, setDiplomayear] = useState("");
  const [degreeyear, setDegreeyear] = useState("");
  const [mastersyear, setMastersyear] = useState("");

  const navigate = useNavigate();

  const id = window.sessionStorage.getItem("EducationId");

  useEffect(() => {
    jobseekerservices
      .updateEducation(id)
      .then((response) => {
        setEducationid(response.data.educationid);
        setEducationtype(response.data.educationtype);
        setSscpercent(response.data.sscpercent);
        setHscpercent(response.data.hscpercent);
        setDiplomapercent(response.data.diplomapercent);
        setDegreepercent(response.data.degreepercent);
        setMasterspercent(response.data.masterspercent);
        setSscyear(response.data.sscyear);
        setHscyear(response.data.hscyear);
        setDiplomayear(response.data.diplomayear);
        setDegreeyear(response.data.degreeyear);
        setMastersyear(response.data.mastersyear);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateEducation = (e) => {
    e.preventDefault();
    const education = {educationid, educationtype, sscpercent, hscpercent, diplomapercent, degreepercent, masterspercent,sscyear,
      hscyear,diplomayear, degreeyear, mastersyear  };

    if (id) {
      jobseekerservices
        .updateEducation(education)
        .then((response) => {
          console.log(response.data);
          toast.success("Updated Successfully");
          navigate("/JobSeekerHome");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Updation Failed");
        });
    }
  };

  return (
    <>
    <section className="wrapper">
      <form className="form-right">
        <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
        <h2 className="text-uppercase text-center">
          Update Details
        </h2>
        <div className="row">
          <div className="mb-3">
            <label>Education id</label>
            <input
              type="text"
              className="input-field"
              required
              value={educationid}
              onChange={(e) => setEducationid(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Education Type</label>
            <input
              type="text"
              className="input-field"
              required
              value={educationtype}
              onChange={(e) => setEducationtype(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>SSC Percent</label>
            <input
              type="text"
              className="input-field"
              required
              value={sscpercent}
              onChange={(e) => setSscpercent(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="mb-3">
          <label>HSC Percent </label>
          <input
            type="text"
            className="input-field"
            required
            value={hscpercent}
            onChange={(e) => setHscpercent(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Diploma Percent </label>
          <input
            type="text"
            className="input-field"
            required
            value={diplomapercent}
            onChange={(e) => setDiplomapercent(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Degree Percent </label>
          <input
            type="text"
            className="input-field"
            required
            value={degreepercent}
            onChange={(e) => setDegreepercent(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
            <label>Masters Percent</label>
            <input
              type="text"
              className="input-field"
              required
              value={masterspercent}
              onChange={(e) =>setMasterspercent(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>SSC Year </label>
            <input
              type="text"
              className="input-field"
              required
              value={sscyear}
              onChange={(e) => setSscyear(e.target.value)}
            ></input>
          </div>
      
        <div className="mb-3">
          <label> HSC Year</label>
          <input
            type="text"
            className="input-field"
            required
            value={hscyear}
            onChange={(e) => setHscyear(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Diploma Year </label>
          <input
            type="text"
            className="input-field"
            required
            value={diplomayear}
            onChange={(e) => setDiplomayear(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Degree Year </label>
          <input
            type="text"
            className="input-field"
            required
            value={degreeyear}
            onChange={(e) => setDegreeyear(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label>Master Year</label>
          <input
            type="text"
            className="input-field"
            required
            value={mastersyear}
            onChange={(e) => setMastersyear(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <input
            type="submit"
            value="Update"
            className="register"
            name="register"
            onClick={UpdateEducation}
          ></input>
        </div>
      </form>
    </section>
  </>
  )

}

export default UpdateEducation