import axios from "axios";

export const JOBSEEKERLOGIN ="http://localhost:9009/jobseeker/login";
export const JOBSEEKERVIEWPROFILE = "http://localhost:9009/jobseeker/viewprofile/";
export const UPDATEJOBSEEKER = "http://localhost:9009/jobseeker/update";
export const GETALLJOBSEEKERS = "http://localhost:9009/admin/getalljobseeker";
export const UPDATEEDUCATION = "http://localhost:9009/jobseeker/updateeducation";
export const UDDATEEXPERIENCE = "http://localhost:9009/jobseeker/updateexp";


class jobseekerservices {
    getAllJobSeeker() {
    return axios.get(GETALLJOBSEEKERS);
    }
  
    // deleteJobSeeker(jobseekerid) {
    //   return axios.delete(DELETEADMIN + jobseekerid);
    // }
  
    updateJobSeeker(jobseeker) {
      return axios.put(UPDATEJOBSEEKER, jobseeker);
    }
  
    getJobSeekerById(jobseekerid) {
      return axios.get(JOBSEEKERVIEWPROFILE + jobseekerid);
    }

    updateEducation(education){
      return axios.put(UPDATEEDUCATION, education);
    }

    updateExperience(experience){
      return axios.put(UDDATEEXPERIENCE, experience);
    }

  }

  export default new jobseekerservices();
  