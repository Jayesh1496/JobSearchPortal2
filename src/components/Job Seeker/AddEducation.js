import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddEducation = () => {
  const [educationtype, setEduType] = useState("");
  const [sscpercent, setSscMarks] = useState("");
  const [hscpercent, setHscMarks] = useState("");
  const [diplomapercent, setDiplomaMarks] = useState("");
  const [degreepercent, setDegreeMarks] = useState("");
  const [masterspercent, serMasterMarks] = useState("");
  const [sscyear, setSscYear] = useState("");
  const [hscyear, setHscYear] = useState("");
  const [diplomayear, setDiplomaYear] = useState("");
  const [degreeyear, setDegreeYear] = useState("");
  const [mastersyear, setMasterYear] = useState("");

  const navigate =useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    const student = {
        educationtype,
        sscpercent,
        hscpercent,
        diplomapercent,
        degreepercent,
        masterspercent,
        sscyear,
        hscyear,
        diplomayear,
        degreeyear,
        mastersyear,
    };
    if (educationtype.length === 0) {
      toast.error("Please Enter Eduaction Type");
    } else if (sscpercent.length === 0) {
      toast.error("Please Enter SSC Percentage");
    } else if (hscpercent.length === 0) {
      toast.error("Please Enter HSC Percentage");
    } else if (degreepercent.length === 0) {
      toast.error("Please Enter Degree Percentage");
    } else if (sscyear.length === 0) {
      toast.error("Please Enter SSC Passout Year");
    } else if (hscyear.length === 0) {
      toast.error("Please Enter HSC Passout Year");
    } else if (diplomayear.length === 0) {
      toast.error("Please Enter Diploma Passout Year");
    } else if (degreeyear.length === 0) {
      toast.error("Please Enter Degree Passout Year");
    } else {
      fetch("http://localhost:9009/jobseeker/addeducation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        toast.success("Eduaction Details Added Successfully !")
        navigate("/JobSeekerHome")
      });
    }
  };
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
          <h2 className="text-uppercase text-center">
            Add Eduaction Details
          </h2>
          <div className="row">
            <div className="mb-3">
              <label>Eduaction Type</label>
              <input
                type="text"
                className="input-field"
                value={educationtype}
                onChange={(e) => setEduType(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>SSC Percentage</label>
              <input
                type="text"
                className="input-field"
                value={sscpercent}
                onChange={(e) => setSscMarks(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>HSC Percentage</label>
              <input
                type="text"
                className="input-field"
                value={hscpercent}
                onChange={(e) => setHscMarks(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Diploma Percentage</label>
            <input
              type="text"
              className="input-field"
              value={diplomapercent}
              onChange={(e) => setDiplomaMarks(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Degree Percentage</label>
            <input
              type="text"
              className="input-field"
              value={degreepercent}
              onChange={(e) => setDegreeMarks(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Master Percentage</label>
            <input
              type="text"
              className="input-field"
              value={masterspercent}
              onChange={(e) => serMasterMarks(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>SSC Passout Year</label>
            <input
              type="text"
              className="input-field"
              value={sscyear}
              onChange={(e) => setSscYear(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>HSC Passout Year</label>
            <input
              type="text"
              className="input-field"
              value={hscyear}
              onChange={(e) => setHscYear(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Diploma Passout Year</label>
            <input
              type="text"
              className="input-field"
              value={diplomayear}
              onChange={(e) => setDiplomaYear(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Degree Passout Year</label>
            <input
              type="text"
              className="input-field"
              value={degreeyear}
              onChange={(e) => setDegreeYear(e.target.value)}
            ></input>
          </div>

          <div className="mb-3">
            <label>Master Degree Passout Year</label>
            <input
              type="text"
              className="input-field"
              required
              value={mastersyear}
              onChange={(e) => setMasterYear(e.target.value)}
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

export default AddEducation;
